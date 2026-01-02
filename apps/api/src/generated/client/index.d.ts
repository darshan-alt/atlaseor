
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Company
 * 
 */
export type Company = $Result.DefaultSelection<Prisma.$CompanyPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Employee
 * 
 */
export type Employee = $Result.DefaultSelection<Prisma.$EmployeePayload>
/**
 * Model AuditLog
 * 
 */
export type AuditLog = $Result.DefaultSelection<Prisma.$AuditLogPayload>
/**
 * Model Payroll
 * 
 */
export type Payroll = $Result.DefaultSelection<Prisma.$PayrollPayload>
/**
 * Model PayrollItem
 * 
 */
export type PayrollItem = $Result.DefaultSelection<Prisma.$PayrollItemPayload>
/**
 * Model Offer
 * 
 */
export type Offer = $Result.DefaultSelection<Prisma.$OfferPayload>
/**
 * Model Contract
 * 
 */
export type Contract = $Result.DefaultSelection<Prisma.$ContractPayload>
/**
 * Model Document
 * 
 */
export type Document = $Result.DefaultSelection<Prisma.$DocumentPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  SUPER_ADMIN: 'SUPER_ADMIN',
  COMPANY_OWNER: 'COMPANY_OWNER',
  HR_ADMIN: 'HR_ADMIN',
  PAYROLL_ADMIN: 'PAYROLL_ADMIN',
  FINANCE_ADMIN: 'FINANCE_ADMIN',
  MANAGER: 'MANAGER',
  EMPLOYEE: 'EMPLOYEE',
  AUDITOR: 'AUDITOR'
};

export type Role = (typeof Role)[keyof typeof Role]


export const CountryCode: {
  IN: 'IN',
  US: 'US'
};

export type CountryCode = (typeof CountryCode)[keyof typeof CountryCode]


export const EmployeeStatus: {
  ONBOARDING: 'ONBOARDING',
  ACTIVE: 'ACTIVE',
  ON_LEAVE: 'ON_LEAVE',
  TERMINATED: 'TERMINATED'
};

export type EmployeeStatus = (typeof EmployeeStatus)[keyof typeof EmployeeStatus]


export const PayrollStatus: {
  DRAFT: 'DRAFT',
  PROCESSING: 'PROCESSING',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED'
};

export type PayrollStatus = (typeof PayrollStatus)[keyof typeof PayrollStatus]


export const PayrollItemStatus: {
  PENDING: 'PENDING',
  REVIEWED: 'REVIEWED',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED'
};

export type PayrollItemStatus = (typeof PayrollItemStatus)[keyof typeof PayrollItemStatus]


export const OfferStatus: {
  DRAFT: 'DRAFT',
  SENT: 'SENT',
  ACCEPTED: 'ACCEPTED',
  REJECTED: 'REJECTED',
  EXPIRED: 'EXPIRED'
};

export type OfferStatus = (typeof OfferStatus)[keyof typeof OfferStatus]


export const ContractStatus: {
  DRAFT: 'DRAFT',
  PENDING_SIGNATURE: 'PENDING_SIGNATURE',
  ACTIVE: 'ACTIVE',
  TERMINATED: 'TERMINATED',
  CANCELLED: 'CANCELLED'
};

export type ContractStatus = (typeof ContractStatus)[keyof typeof ContractStatus]


export const DocumentStatus: {
  PENDING: 'PENDING',
  UPLOADED: 'UPLOADED',
  VERIFIED: 'VERIFIED',
  REJECTED: 'REJECTED'
};

export type DocumentStatus = (typeof DocumentStatus)[keyof typeof DocumentStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type CountryCode = $Enums.CountryCode

export const CountryCode: typeof $Enums.CountryCode

export type EmployeeStatus = $Enums.EmployeeStatus

export const EmployeeStatus: typeof $Enums.EmployeeStatus

export type PayrollStatus = $Enums.PayrollStatus

export const PayrollStatus: typeof $Enums.PayrollStatus

export type PayrollItemStatus = $Enums.PayrollItemStatus

export const PayrollItemStatus: typeof $Enums.PayrollItemStatus

export type OfferStatus = $Enums.OfferStatus

export const OfferStatus: typeof $Enums.OfferStatus

export type ContractStatus = $Enums.ContractStatus

export const ContractStatus: typeof $Enums.ContractStatus

export type DocumentStatus = $Enums.DocumentStatus

export const DocumentStatus: typeof $Enums.DocumentStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Companies
 * const companies = await prisma.company.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Companies
   * const companies = await prisma.company.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.company`: Exposes CRUD operations for the **Company** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Companies
    * const companies = await prisma.company.findMany()
    * ```
    */
  get company(): Prisma.CompanyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.employee`: Exposes CRUD operations for the **Employee** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Employees
    * const employees = await prisma.employee.findMany()
    * ```
    */
  get employee(): Prisma.EmployeeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.auditLog`: Exposes CRUD operations for the **AuditLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuditLogs
    * const auditLogs = await prisma.auditLog.findMany()
    * ```
    */
  get auditLog(): Prisma.AuditLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payroll`: Exposes CRUD operations for the **Payroll** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payrolls
    * const payrolls = await prisma.payroll.findMany()
    * ```
    */
  get payroll(): Prisma.PayrollDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payrollItem`: Exposes CRUD operations for the **PayrollItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PayrollItems
    * const payrollItems = await prisma.payrollItem.findMany()
    * ```
    */
  get payrollItem(): Prisma.PayrollItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.offer`: Exposes CRUD operations for the **Offer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Offers
    * const offers = await prisma.offer.findMany()
    * ```
    */
  get offer(): Prisma.OfferDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contract`: Exposes CRUD operations for the **Contract** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contracts
    * const contracts = await prisma.contract.findMany()
    * ```
    */
  get contract(): Prisma.ContractDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.document`: Exposes CRUD operations for the **Document** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Documents
    * const documents = await prisma.document.findMany()
    * ```
    */
  get document(): Prisma.DocumentDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.1
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Company: 'Company',
    User: 'User',
    Employee: 'Employee',
    AuditLog: 'AuditLog',
    Payroll: 'Payroll',
    PayrollItem: 'PayrollItem',
    Offer: 'Offer',
    Contract: 'Contract',
    Document: 'Document'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "company" | "user" | "employee" | "auditLog" | "payroll" | "payrollItem" | "offer" | "contract" | "document"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Company: {
        payload: Prisma.$CompanyPayload<ExtArgs>
        fields: Prisma.CompanyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompanyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompanyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findFirst: {
            args: Prisma.CompanyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompanyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findMany: {
            args: Prisma.CompanyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          create: {
            args: Prisma.CompanyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          createMany: {
            args: Prisma.CompanyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompanyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          delete: {
            args: Prisma.CompanyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          update: {
            args: Prisma.CompanyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          deleteMany: {
            args: Prisma.CompanyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompanyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CompanyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          upsert: {
            args: Prisma.CompanyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          aggregate: {
            args: Prisma.CompanyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompany>
          }
          groupBy: {
            args: Prisma.CompanyGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompanyGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompanyCountArgs<ExtArgs>
            result: $Utils.Optional<CompanyCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Employee: {
        payload: Prisma.$EmployeePayload<ExtArgs>
        fields: Prisma.EmployeeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmployeeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmployeeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          findFirst: {
            args: Prisma.EmployeeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmployeeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          findMany: {
            args: Prisma.EmployeeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          create: {
            args: Prisma.EmployeeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          createMany: {
            args: Prisma.EmployeeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmployeeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          delete: {
            args: Prisma.EmployeeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          update: {
            args: Prisma.EmployeeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          deleteMany: {
            args: Prisma.EmployeeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmployeeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmployeeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          upsert: {
            args: Prisma.EmployeeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          aggregate: {
            args: Prisma.EmployeeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmployee>
          }
          groupBy: {
            args: Prisma.EmployeeGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmployeeGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmployeeCountArgs<ExtArgs>
            result: $Utils.Optional<EmployeeCountAggregateOutputType> | number
          }
        }
      }
      AuditLog: {
        payload: Prisma.$AuditLogPayload<ExtArgs>
        fields: Prisma.AuditLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuditLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuditLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findFirst: {
            args: Prisma.AuditLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuditLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findMany: {
            args: Prisma.AuditLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          create: {
            args: Prisma.AuditLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          createMany: {
            args: Prisma.AuditLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuditLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          delete: {
            args: Prisma.AuditLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          update: {
            args: Prisma.AuditLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          deleteMany: {
            args: Prisma.AuditLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuditLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuditLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          upsert: {
            args: Prisma.AuditLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          aggregate: {
            args: Prisma.AuditLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuditLog>
          }
          groupBy: {
            args: Prisma.AuditLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuditLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuditLogCountArgs<ExtArgs>
            result: $Utils.Optional<AuditLogCountAggregateOutputType> | number
          }
        }
      }
      Payroll: {
        payload: Prisma.$PayrollPayload<ExtArgs>
        fields: Prisma.PayrollFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PayrollFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PayrollFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollPayload>
          }
          findFirst: {
            args: Prisma.PayrollFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PayrollFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollPayload>
          }
          findMany: {
            args: Prisma.PayrollFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollPayload>[]
          }
          create: {
            args: Prisma.PayrollCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollPayload>
          }
          createMany: {
            args: Prisma.PayrollCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PayrollCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollPayload>[]
          }
          delete: {
            args: Prisma.PayrollDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollPayload>
          }
          update: {
            args: Prisma.PayrollUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollPayload>
          }
          deleteMany: {
            args: Prisma.PayrollDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PayrollUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PayrollUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollPayload>[]
          }
          upsert: {
            args: Prisma.PayrollUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollPayload>
          }
          aggregate: {
            args: Prisma.PayrollAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayroll>
          }
          groupBy: {
            args: Prisma.PayrollGroupByArgs<ExtArgs>
            result: $Utils.Optional<PayrollGroupByOutputType>[]
          }
          count: {
            args: Prisma.PayrollCountArgs<ExtArgs>
            result: $Utils.Optional<PayrollCountAggregateOutputType> | number
          }
        }
      }
      PayrollItem: {
        payload: Prisma.$PayrollItemPayload<ExtArgs>
        fields: Prisma.PayrollItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PayrollItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PayrollItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollItemPayload>
          }
          findFirst: {
            args: Prisma.PayrollItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PayrollItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollItemPayload>
          }
          findMany: {
            args: Prisma.PayrollItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollItemPayload>[]
          }
          create: {
            args: Prisma.PayrollItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollItemPayload>
          }
          createMany: {
            args: Prisma.PayrollItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PayrollItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollItemPayload>[]
          }
          delete: {
            args: Prisma.PayrollItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollItemPayload>
          }
          update: {
            args: Prisma.PayrollItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollItemPayload>
          }
          deleteMany: {
            args: Prisma.PayrollItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PayrollItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PayrollItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollItemPayload>[]
          }
          upsert: {
            args: Prisma.PayrollItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollItemPayload>
          }
          aggregate: {
            args: Prisma.PayrollItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayrollItem>
          }
          groupBy: {
            args: Prisma.PayrollItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<PayrollItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.PayrollItemCountArgs<ExtArgs>
            result: $Utils.Optional<PayrollItemCountAggregateOutputType> | number
          }
        }
      }
      Offer: {
        payload: Prisma.$OfferPayload<ExtArgs>
        fields: Prisma.OfferFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OfferFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OfferFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload>
          }
          findFirst: {
            args: Prisma.OfferFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OfferFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload>
          }
          findMany: {
            args: Prisma.OfferFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload>[]
          }
          create: {
            args: Prisma.OfferCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload>
          }
          createMany: {
            args: Prisma.OfferCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OfferCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload>[]
          }
          delete: {
            args: Prisma.OfferDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload>
          }
          update: {
            args: Prisma.OfferUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload>
          }
          deleteMany: {
            args: Prisma.OfferDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OfferUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OfferUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload>[]
          }
          upsert: {
            args: Prisma.OfferUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload>
          }
          aggregate: {
            args: Prisma.OfferAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOffer>
          }
          groupBy: {
            args: Prisma.OfferGroupByArgs<ExtArgs>
            result: $Utils.Optional<OfferGroupByOutputType>[]
          }
          count: {
            args: Prisma.OfferCountArgs<ExtArgs>
            result: $Utils.Optional<OfferCountAggregateOutputType> | number
          }
        }
      }
      Contract: {
        payload: Prisma.$ContractPayload<ExtArgs>
        fields: Prisma.ContractFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContractFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContractFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>
          }
          findFirst: {
            args: Prisma.ContractFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContractFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>
          }
          findMany: {
            args: Prisma.ContractFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>[]
          }
          create: {
            args: Prisma.ContractCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>
          }
          createMany: {
            args: Prisma.ContractCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContractCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>[]
          }
          delete: {
            args: Prisma.ContractDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>
          }
          update: {
            args: Prisma.ContractUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>
          }
          deleteMany: {
            args: Prisma.ContractDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContractUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContractUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>[]
          }
          upsert: {
            args: Prisma.ContractUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>
          }
          aggregate: {
            args: Prisma.ContractAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContract>
          }
          groupBy: {
            args: Prisma.ContractGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContractGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContractCountArgs<ExtArgs>
            result: $Utils.Optional<ContractCountAggregateOutputType> | number
          }
        }
      }
      Document: {
        payload: Prisma.$DocumentPayload<ExtArgs>
        fields: Prisma.DocumentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DocumentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DocumentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          findFirst: {
            args: Prisma.DocumentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DocumentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          findMany: {
            args: Prisma.DocumentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[]
          }
          create: {
            args: Prisma.DocumentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          createMany: {
            args: Prisma.DocumentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DocumentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[]
          }
          delete: {
            args: Prisma.DocumentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          update: {
            args: Prisma.DocumentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          deleteMany: {
            args: Prisma.DocumentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DocumentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DocumentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[]
          }
          upsert: {
            args: Prisma.DocumentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          aggregate: {
            args: Prisma.DocumentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocument>
          }
          groupBy: {
            args: Prisma.DocumentGroupByArgs<ExtArgs>
            result: $Utils.Optional<DocumentGroupByOutputType>[]
          }
          count: {
            args: Prisma.DocumentCountArgs<ExtArgs>
            result: $Utils.Optional<DocumentCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    company?: CompanyOmit
    user?: UserOmit
    employee?: EmployeeOmit
    auditLog?: AuditLogOmit
    payroll?: PayrollOmit
    payrollItem?: PayrollItemOmit
    offer?: OfferOmit
    contract?: ContractOmit
    document?: DocumentOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CompanyCountOutputType
   */

  export type CompanyCountOutputType = {
    users: number
    employees: number
    payrolls: number
    offers: number
    contracts: number
  }

  export type CompanyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | CompanyCountOutputTypeCountUsersArgs
    employees?: boolean | CompanyCountOutputTypeCountEmployeesArgs
    payrolls?: boolean | CompanyCountOutputTypeCountPayrollsArgs
    offers?: boolean | CompanyCountOutputTypeCountOffersArgs
    contracts?: boolean | CompanyCountOutputTypeCountContractsArgs
  }

  // Custom InputTypes
  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyCountOutputType
     */
    select?: CompanyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountEmployeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeWhereInput
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountPayrollsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PayrollWhereInput
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountOffersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OfferWhereInput
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountContractsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContractWhereInput
  }


  /**
   * Count Type EmployeeCountOutputType
   */

  export type EmployeeCountOutputType = {
    directReports: number
    payrollItems: number
    documents: number
  }

  export type EmployeeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    directReports?: boolean | EmployeeCountOutputTypeCountDirectReportsArgs
    payrollItems?: boolean | EmployeeCountOutputTypeCountPayrollItemsArgs
    documents?: boolean | EmployeeCountOutputTypeCountDocumentsArgs
  }

  // Custom InputTypes
  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeCountOutputType
     */
    select?: EmployeeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountDirectReportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeWhereInput
  }

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountPayrollItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PayrollItemWhereInput
  }

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentWhereInput
  }


  /**
   * Count Type PayrollCountOutputType
   */

  export type PayrollCountOutputType = {
    items: number
  }

  export type PayrollCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | PayrollCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * PayrollCountOutputType without action
   */
  export type PayrollCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayrollCountOutputType
     */
    select?: PayrollCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PayrollCountOutputType without action
   */
  export type PayrollCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PayrollItemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Company
   */

  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  export type CompanyMinAggregateOutputType = {
    id: string | null
    name: string | null
    legalName: string | null
    hqCountry: $Enums.CountryCode | null
    taxId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CompanyMaxAggregateOutputType = {
    id: string | null
    name: string | null
    legalName: string | null
    hqCountry: $Enums.CountryCode | null
    taxId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CompanyCountAggregateOutputType = {
    id: number
    name: number
    legalName: number
    hqCountry: number
    taxId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CompanyMinAggregateInputType = {
    id?: true
    name?: true
    legalName?: true
    hqCountry?: true
    taxId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CompanyMaxAggregateInputType = {
    id?: true
    name?: true
    legalName?: true
    hqCountry?: true
    taxId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CompanyCountAggregateInputType = {
    id?: true
    name?: true
    legalName?: true
    hqCountry?: true
    taxId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Company to aggregate.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Companies
    **/
    _count?: true | CompanyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanyMaxAggregateInputType
  }

  export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
        [P in keyof T & keyof AggregateCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany[P]>
      : GetScalarType<T[P], AggregateCompany[P]>
  }




  export type CompanyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyWhereInput
    orderBy?: CompanyOrderByWithAggregationInput | CompanyOrderByWithAggregationInput[]
    by: CompanyScalarFieldEnum[] | CompanyScalarFieldEnum
    having?: CompanyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanyCountAggregateInputType | true
    _min?: CompanyMinAggregateInputType
    _max?: CompanyMaxAggregateInputType
  }

  export type CompanyGroupByOutputType = {
    id: string
    name: string
    legalName: string | null
    hqCountry: $Enums.CountryCode
    taxId: string | null
    createdAt: Date
    updatedAt: Date
    _count: CompanyCountAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  type GetCompanyGroupByPayload<T extends CompanyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanyGroupByOutputType[P]>
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>
        }
      >
    >


  export type CompanySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    legalName?: boolean
    hqCountry?: boolean
    taxId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    users?: boolean | Company$usersArgs<ExtArgs>
    employees?: boolean | Company$employeesArgs<ExtArgs>
    payrolls?: boolean | Company$payrollsArgs<ExtArgs>
    offers?: boolean | Company$offersArgs<ExtArgs>
    contracts?: boolean | Company$contractsArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["company"]>

  export type CompanySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    legalName?: boolean
    hqCountry?: boolean
    taxId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["company"]>

  export type CompanySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    legalName?: boolean
    hqCountry?: boolean
    taxId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["company"]>

  export type CompanySelectScalar = {
    id?: boolean
    name?: boolean
    legalName?: boolean
    hqCountry?: boolean
    taxId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CompanyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "legalName" | "hqCountry" | "taxId" | "createdAt" | "updatedAt", ExtArgs["result"]["company"]>
  export type CompanyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Company$usersArgs<ExtArgs>
    employees?: boolean | Company$employeesArgs<ExtArgs>
    payrolls?: boolean | Company$payrollsArgs<ExtArgs>
    offers?: boolean | Company$offersArgs<ExtArgs>
    contracts?: boolean | Company$contractsArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CompanyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CompanyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CompanyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Company"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
      employees: Prisma.$EmployeePayload<ExtArgs>[]
      payrolls: Prisma.$PayrollPayload<ExtArgs>[]
      offers: Prisma.$OfferPayload<ExtArgs>[]
      contracts: Prisma.$ContractPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      legalName: string | null
      hqCountry: $Enums.CountryCode
      taxId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["company"]>
    composites: {}
  }

  type CompanyGetPayload<S extends boolean | null | undefined | CompanyDefaultArgs> = $Result.GetResult<Prisma.$CompanyPayload, S>

  type CompanyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompanyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompanyCountAggregateInputType | true
    }

  export interface CompanyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Company'], meta: { name: 'Company' } }
    /**
     * Find zero or one Company that matches the filter.
     * @param {CompanyFindUniqueArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompanyFindUniqueArgs>(args: SelectSubset<T, CompanyFindUniqueArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Company that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompanyFindUniqueOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompanyFindUniqueOrThrowArgs>(args: SelectSubset<T, CompanyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompanyFindFirstArgs>(args?: SelectSubset<T, CompanyFindFirstArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompanyFindFirstOrThrowArgs>(args?: SelectSubset<T, CompanyFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.company.findMany()
     * 
     * // Get first 10 Companies
     * const companies = await prisma.company.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companyWithIdOnly = await prisma.company.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompanyFindManyArgs>(args?: SelectSubset<T, CompanyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Company.
     * @param {CompanyCreateArgs} args - Arguments to create a Company.
     * @example
     * // Create one Company
     * const Company = await prisma.company.create({
     *   data: {
     *     // ... data to create a Company
     *   }
     * })
     * 
     */
    create<T extends CompanyCreateArgs>(args: SelectSubset<T, CompanyCreateArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Companies.
     * @param {CompanyCreateManyArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompanyCreateManyArgs>(args?: SelectSubset<T, CompanyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Companies and returns the data saved in the database.
     * @param {CompanyCreateManyAndReturnArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Companies and only return the `id`
     * const companyWithIdOnly = await prisma.company.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompanyCreateManyAndReturnArgs>(args?: SelectSubset<T, CompanyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Company.
     * @param {CompanyDeleteArgs} args - Arguments to delete one Company.
     * @example
     * // Delete one Company
     * const Company = await prisma.company.delete({
     *   where: {
     *     // ... filter to delete one Company
     *   }
     * })
     * 
     */
    delete<T extends CompanyDeleteArgs>(args: SelectSubset<T, CompanyDeleteArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Company.
     * @param {CompanyUpdateArgs} args - Arguments to update one Company.
     * @example
     * // Update one Company
     * const company = await prisma.company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompanyUpdateArgs>(args: SelectSubset<T, CompanyUpdateArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Companies.
     * @param {CompanyDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompanyDeleteManyArgs>(args?: SelectSubset<T, CompanyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompanyUpdateManyArgs>(args: SelectSubset<T, CompanyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies and returns the data updated in the database.
     * @param {CompanyUpdateManyAndReturnArgs} args - Arguments to update many Companies.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Companies and only return the `id`
     * const companyWithIdOnly = await prisma.company.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CompanyUpdateManyAndReturnArgs>(args: SelectSubset<T, CompanyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Company.
     * @param {CompanyUpsertArgs} args - Arguments to update or create a Company.
     * @example
     * // Update or create a Company
     * const company = await prisma.company.upsert({
     *   create: {
     *     // ... data to create a Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company we want to update
     *   }
     * })
     */
    upsert<T extends CompanyUpsertArgs>(args: SelectSubset<T, CompanyUpsertArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.company.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
    **/
    count<T extends CompanyCountArgs>(
      args?: Subset<T, CompanyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompanyAggregateArgs>(args: Subset<T, CompanyAggregateArgs>): Prisma.PrismaPromise<GetCompanyAggregateType<T>>

    /**
     * Group by Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CompanyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompanyGroupByArgs['orderBy'] }
        : { orderBy?: CompanyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CompanyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Company model
   */
  readonly fields: CompanyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompanyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Company$usersArgs<ExtArgs> = {}>(args?: Subset<T, Company$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    employees<T extends Company$employeesArgs<ExtArgs> = {}>(args?: Subset<T, Company$employeesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    payrolls<T extends Company$payrollsArgs<ExtArgs> = {}>(args?: Subset<T, Company$payrollsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayrollPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    offers<T extends Company$offersArgs<ExtArgs> = {}>(args?: Subset<T, Company$offersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    contracts<T extends Company$contractsArgs<ExtArgs> = {}>(args?: Subset<T, Company$contractsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Company model
   */
  interface CompanyFieldRefs {
    readonly id: FieldRef<"Company", 'String'>
    readonly name: FieldRef<"Company", 'String'>
    readonly legalName: FieldRef<"Company", 'String'>
    readonly hqCountry: FieldRef<"Company", 'CountryCode'>
    readonly taxId: FieldRef<"Company", 'String'>
    readonly createdAt: FieldRef<"Company", 'DateTime'>
    readonly updatedAt: FieldRef<"Company", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Company findUnique
   */
  export type CompanyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company findUniqueOrThrow
   */
  export type CompanyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company findFirst
   */
  export type CompanyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company findFirstOrThrow
   */
  export type CompanyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company findMany
   */
  export type CompanyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Companies to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company create
   */
  export type CompanyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to create a Company.
     */
    data: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
  }

  /**
   * Company createMany
   */
  export type CompanyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Company createManyAndReturn
   */
  export type CompanyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Company update
   */
  export type CompanyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to update a Company.
     */
    data: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
    /**
     * Choose, which Company to update.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company updateMany
   */
  export type CompanyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Companies.
     */
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to update.
     */
    limit?: number
  }

  /**
   * Company updateManyAndReturn
   */
  export type CompanyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * The data used to update Companies.
     */
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to update.
     */
    limit?: number
  }

  /**
   * Company upsert
   */
  export type CompanyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The filter to search for the Company to update in case it exists.
     */
    where: CompanyWhereUniqueInput
    /**
     * In case the Company found by the `where` argument doesn't exist, create a new Company with this data.
     */
    create: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
    /**
     * In case the Company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
  }

  /**
   * Company delete
   */
  export type CompanyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter which Company to delete.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company deleteMany
   */
  export type CompanyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Companies to delete
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to delete.
     */
    limit?: number
  }

  /**
   * Company.users
   */
  export type Company$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Company.employees
   */
  export type Company$employeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    where?: EmployeeWhereInput
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    cursor?: EmployeeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Company.payrolls
   */
  export type Company$payrollsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payroll
     */
    select?: PayrollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payroll
     */
    omit?: PayrollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollInclude<ExtArgs> | null
    where?: PayrollWhereInput
    orderBy?: PayrollOrderByWithRelationInput | PayrollOrderByWithRelationInput[]
    cursor?: PayrollWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PayrollScalarFieldEnum | PayrollScalarFieldEnum[]
  }

  /**
   * Company.offers
   */
  export type Company$offersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    where?: OfferWhereInput
    orderBy?: OfferOrderByWithRelationInput | OfferOrderByWithRelationInput[]
    cursor?: OfferWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OfferScalarFieldEnum | OfferScalarFieldEnum[]
  }

  /**
   * Company.contracts
   */
  export type Company$contractsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    where?: ContractWhereInput
    orderBy?: ContractOrderByWithRelationInput | ContractOrderByWithRelationInput[]
    cursor?: ContractWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContractScalarFieldEnum | ContractScalarFieldEnum[]
  }

  /**
   * Company without action
   */
  export type CompanyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    firstName: string | null
    lastName: string | null
    role: $Enums.Role | null
    companyId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    firstName: string | null
    lastName: string | null
    role: $Enums.Role | null
    companyId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    passwordHash: number
    firstName: number
    lastName: number
    role: number
    companyId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    firstName?: true
    lastName?: true
    role?: true
    companyId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    firstName?: true
    lastName?: true
    role?: true
    companyId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    firstName?: true
    lastName?: true
    role?: true
    companyId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    passwordHash: string
    firstName: string
    lastName: string
    role: $Enums.Role
    companyId: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    firstName?: boolean
    lastName?: boolean
    role?: boolean
    companyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | User$companyArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    firstName?: boolean
    lastName?: boolean
    role?: boolean
    companyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | User$companyArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    firstName?: boolean
    lastName?: boolean
    role?: boolean
    companyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | User$companyArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    firstName?: boolean
    lastName?: boolean
    role?: boolean
    companyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "passwordHash" | "firstName" | "lastName" | "role" | "companyId" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | User$companyArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | User$companyArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | User$companyArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      company: Prisma.$CompanyPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      passwordHash: string
      firstName: string
      lastName: string
      role: $Enums.Role
      companyId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    company<T extends User$companyArgs<ExtArgs> = {}>(args?: Subset<T, User$companyArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly companyId: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.company
   */
  export type User$companyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    where?: CompanyWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Employee
   */

  export type AggregateEmployee = {
    _count: EmployeeCountAggregateOutputType | null
    _avg: EmployeeAvgAggregateOutputType | null
    _sum: EmployeeSumAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  export type EmployeeAvgAggregateOutputType = {
    baseSalary: number | null
  }

  export type EmployeeSumAggregateOutputType = {
    baseSalary: number | null
  }

  export type EmployeeMinAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    workEmail: string | null
    dateOfJoin: Date | null
    status: $Enums.EmployeeStatus | null
    companyId: string | null
    country: $Enums.CountryCode | null
    baseSalary: number | null
    managerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmployeeMaxAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    workEmail: string | null
    dateOfJoin: Date | null
    status: $Enums.EmployeeStatus | null
    companyId: string | null
    country: $Enums.CountryCode | null
    baseSalary: number | null
    managerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmployeeCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    email: number
    workEmail: number
    dateOfJoin: number
    status: number
    companyId: number
    country: number
    baseSalary: number
    managerId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EmployeeAvgAggregateInputType = {
    baseSalary?: true
  }

  export type EmployeeSumAggregateInputType = {
    baseSalary?: true
  }

  export type EmployeeMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    workEmail?: true
    dateOfJoin?: true
    status?: true
    companyId?: true
    country?: true
    baseSalary?: true
    managerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmployeeMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    workEmail?: true
    dateOfJoin?: true
    status?: true
    companyId?: true
    country?: true
    baseSalary?: true
    managerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmployeeCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    workEmail?: true
    dateOfJoin?: true
    status?: true
    companyId?: true
    country?: true
    baseSalary?: true
    managerId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EmployeeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employee to aggregate.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Employees
    **/
    _count?: true | EmployeeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmployeeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmployeeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmployeeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmployeeMaxAggregateInputType
  }

  export type GetEmployeeAggregateType<T extends EmployeeAggregateArgs> = {
        [P in keyof T & keyof AggregateEmployee]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployee[P]>
      : GetScalarType<T[P], AggregateEmployee[P]>
  }




  export type EmployeeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeWhereInput
    orderBy?: EmployeeOrderByWithAggregationInput | EmployeeOrderByWithAggregationInput[]
    by: EmployeeScalarFieldEnum[] | EmployeeScalarFieldEnum
    having?: EmployeeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmployeeCountAggregateInputType | true
    _avg?: EmployeeAvgAggregateInputType
    _sum?: EmployeeSumAggregateInputType
    _min?: EmployeeMinAggregateInputType
    _max?: EmployeeMaxAggregateInputType
  }

  export type EmployeeGroupByOutputType = {
    id: string
    firstName: string
    lastName: string
    email: string
    workEmail: string | null
    dateOfJoin: Date | null
    status: $Enums.EmployeeStatus
    companyId: string
    country: $Enums.CountryCode
    baseSalary: number
    managerId: string | null
    createdAt: Date
    updatedAt: Date
    _count: EmployeeCountAggregateOutputType | null
    _avg: EmployeeAvgAggregateOutputType | null
    _sum: EmployeeSumAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  type GetEmployeeGroupByPayload<T extends EmployeeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmployeeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmployeeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
            : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
        }
      >
    >


  export type EmployeeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    workEmail?: boolean
    dateOfJoin?: boolean
    status?: boolean
    companyId?: boolean
    country?: boolean
    baseSalary?: boolean
    managerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    manager?: boolean | Employee$managerArgs<ExtArgs>
    directReports?: boolean | Employee$directReportsArgs<ExtArgs>
    payrollItems?: boolean | Employee$payrollItemsArgs<ExtArgs>
    contract?: boolean | Employee$contractArgs<ExtArgs>
    documents?: boolean | Employee$documentsArgs<ExtArgs>
    _count?: boolean | EmployeeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employee"]>

  export type EmployeeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    workEmail?: boolean
    dateOfJoin?: boolean
    status?: boolean
    companyId?: boolean
    country?: boolean
    baseSalary?: boolean
    managerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    manager?: boolean | Employee$managerArgs<ExtArgs>
  }, ExtArgs["result"]["employee"]>

  export type EmployeeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    workEmail?: boolean
    dateOfJoin?: boolean
    status?: boolean
    companyId?: boolean
    country?: boolean
    baseSalary?: boolean
    managerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    manager?: boolean | Employee$managerArgs<ExtArgs>
  }, ExtArgs["result"]["employee"]>

  export type EmployeeSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    workEmail?: boolean
    dateOfJoin?: boolean
    status?: boolean
    companyId?: boolean
    country?: boolean
    baseSalary?: boolean
    managerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EmployeeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "email" | "workEmail" | "dateOfJoin" | "status" | "companyId" | "country" | "baseSalary" | "managerId" | "createdAt" | "updatedAt", ExtArgs["result"]["employee"]>
  export type EmployeeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    manager?: boolean | Employee$managerArgs<ExtArgs>
    directReports?: boolean | Employee$directReportsArgs<ExtArgs>
    payrollItems?: boolean | Employee$payrollItemsArgs<ExtArgs>
    contract?: boolean | Employee$contractArgs<ExtArgs>
    documents?: boolean | Employee$documentsArgs<ExtArgs>
    _count?: boolean | EmployeeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EmployeeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    manager?: boolean | Employee$managerArgs<ExtArgs>
  }
  export type EmployeeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    manager?: boolean | Employee$managerArgs<ExtArgs>
  }

  export type $EmployeePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Employee"
    objects: {
      company: Prisma.$CompanyPayload<ExtArgs>
      manager: Prisma.$EmployeePayload<ExtArgs> | null
      directReports: Prisma.$EmployeePayload<ExtArgs>[]
      payrollItems: Prisma.$PayrollItemPayload<ExtArgs>[]
      contract: Prisma.$ContractPayload<ExtArgs> | null
      documents: Prisma.$DocumentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      firstName: string
      lastName: string
      email: string
      workEmail: string | null
      dateOfJoin: Date | null
      status: $Enums.EmployeeStatus
      companyId: string
      country: $Enums.CountryCode
      baseSalary: number
      managerId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["employee"]>
    composites: {}
  }

  type EmployeeGetPayload<S extends boolean | null | undefined | EmployeeDefaultArgs> = $Result.GetResult<Prisma.$EmployeePayload, S>

  type EmployeeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmployeeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmployeeCountAggregateInputType | true
    }

  export interface EmployeeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Employee'], meta: { name: 'Employee' } }
    /**
     * Find zero or one Employee that matches the filter.
     * @param {EmployeeFindUniqueArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmployeeFindUniqueArgs>(args: SelectSubset<T, EmployeeFindUniqueArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Employee that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmployeeFindUniqueOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmployeeFindUniqueOrThrowArgs>(args: SelectSubset<T, EmployeeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employee that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindFirstArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmployeeFindFirstArgs>(args?: SelectSubset<T, EmployeeFindFirstArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employee that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindFirstOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmployeeFindFirstOrThrowArgs>(args?: SelectSubset<T, EmployeeFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Employees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Employees
     * const employees = await prisma.employee.findMany()
     * 
     * // Get first 10 Employees
     * const employees = await prisma.employee.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const employeeWithIdOnly = await prisma.employee.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmployeeFindManyArgs>(args?: SelectSubset<T, EmployeeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Employee.
     * @param {EmployeeCreateArgs} args - Arguments to create a Employee.
     * @example
     * // Create one Employee
     * const Employee = await prisma.employee.create({
     *   data: {
     *     // ... data to create a Employee
     *   }
     * })
     * 
     */
    create<T extends EmployeeCreateArgs>(args: SelectSubset<T, EmployeeCreateArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Employees.
     * @param {EmployeeCreateManyArgs} args - Arguments to create many Employees.
     * @example
     * // Create many Employees
     * const employee = await prisma.employee.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmployeeCreateManyArgs>(args?: SelectSubset<T, EmployeeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Employees and returns the data saved in the database.
     * @param {EmployeeCreateManyAndReturnArgs} args - Arguments to create many Employees.
     * @example
     * // Create many Employees
     * const employee = await prisma.employee.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Employees and only return the `id`
     * const employeeWithIdOnly = await prisma.employee.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmployeeCreateManyAndReturnArgs>(args?: SelectSubset<T, EmployeeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Employee.
     * @param {EmployeeDeleteArgs} args - Arguments to delete one Employee.
     * @example
     * // Delete one Employee
     * const Employee = await prisma.employee.delete({
     *   where: {
     *     // ... filter to delete one Employee
     *   }
     * })
     * 
     */
    delete<T extends EmployeeDeleteArgs>(args: SelectSubset<T, EmployeeDeleteArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Employee.
     * @param {EmployeeUpdateArgs} args - Arguments to update one Employee.
     * @example
     * // Update one Employee
     * const employee = await prisma.employee.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmployeeUpdateArgs>(args: SelectSubset<T, EmployeeUpdateArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Employees.
     * @param {EmployeeDeleteManyArgs} args - Arguments to filter Employees to delete.
     * @example
     * // Delete a few Employees
     * const { count } = await prisma.employee.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmployeeDeleteManyArgs>(args?: SelectSubset<T, EmployeeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Employees
     * const employee = await prisma.employee.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmployeeUpdateManyArgs>(args: SelectSubset<T, EmployeeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees and returns the data updated in the database.
     * @param {EmployeeUpdateManyAndReturnArgs} args - Arguments to update many Employees.
     * @example
     * // Update many Employees
     * const employee = await prisma.employee.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Employees and only return the `id`
     * const employeeWithIdOnly = await prisma.employee.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EmployeeUpdateManyAndReturnArgs>(args: SelectSubset<T, EmployeeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Employee.
     * @param {EmployeeUpsertArgs} args - Arguments to update or create a Employee.
     * @example
     * // Update or create a Employee
     * const employee = await prisma.employee.upsert({
     *   create: {
     *     // ... data to create a Employee
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Employee we want to update
     *   }
     * })
     */
    upsert<T extends EmployeeUpsertArgs>(args: SelectSubset<T, EmployeeUpsertArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeCountArgs} args - Arguments to filter Employees to count.
     * @example
     * // Count the number of Employees
     * const count = await prisma.employee.count({
     *   where: {
     *     // ... the filter for the Employees we want to count
     *   }
     * })
    **/
    count<T extends EmployeeCountArgs>(
      args?: Subset<T, EmployeeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployeeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EmployeeAggregateArgs>(args: Subset<T, EmployeeAggregateArgs>): Prisma.PrismaPromise<GetEmployeeAggregateType<T>>

    /**
     * Group by Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EmployeeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmployeeGroupByArgs['orderBy'] }
        : { orderBy?: EmployeeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EmployeeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployeeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Employee model
   */
  readonly fields: EmployeeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Employee.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmployeeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    manager<T extends Employee$managerArgs<ExtArgs> = {}>(args?: Subset<T, Employee$managerArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    directReports<T extends Employee$directReportsArgs<ExtArgs> = {}>(args?: Subset<T, Employee$directReportsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    payrollItems<T extends Employee$payrollItemsArgs<ExtArgs> = {}>(args?: Subset<T, Employee$payrollItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayrollItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    contract<T extends Employee$contractArgs<ExtArgs> = {}>(args?: Subset<T, Employee$contractArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    documents<T extends Employee$documentsArgs<ExtArgs> = {}>(args?: Subset<T, Employee$documentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Employee model
   */
  interface EmployeeFieldRefs {
    readonly id: FieldRef<"Employee", 'String'>
    readonly firstName: FieldRef<"Employee", 'String'>
    readonly lastName: FieldRef<"Employee", 'String'>
    readonly email: FieldRef<"Employee", 'String'>
    readonly workEmail: FieldRef<"Employee", 'String'>
    readonly dateOfJoin: FieldRef<"Employee", 'DateTime'>
    readonly status: FieldRef<"Employee", 'EmployeeStatus'>
    readonly companyId: FieldRef<"Employee", 'String'>
    readonly country: FieldRef<"Employee", 'CountryCode'>
    readonly baseSalary: FieldRef<"Employee", 'Float'>
    readonly managerId: FieldRef<"Employee", 'String'>
    readonly createdAt: FieldRef<"Employee", 'DateTime'>
    readonly updatedAt: FieldRef<"Employee", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Employee findUnique
   */
  export type EmployeeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee findUniqueOrThrow
   */
  export type EmployeeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee findFirst
   */
  export type EmployeeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee findFirstOrThrow
   */
  export type EmployeeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee findMany
   */
  export type EmployeeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employees to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee create
   */
  export type EmployeeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The data needed to create a Employee.
     */
    data: XOR<EmployeeCreateInput, EmployeeUncheckedCreateInput>
  }

  /**
   * Employee createMany
   */
  export type EmployeeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Employees.
     */
    data: EmployeeCreateManyInput | EmployeeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Employee createManyAndReturn
   */
  export type EmployeeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * The data used to create many Employees.
     */
    data: EmployeeCreateManyInput | EmployeeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Employee update
   */
  export type EmployeeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The data needed to update a Employee.
     */
    data: XOR<EmployeeUpdateInput, EmployeeUncheckedUpdateInput>
    /**
     * Choose, which Employee to update.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee updateMany
   */
  export type EmployeeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Employees.
     */
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyInput>
    /**
     * Filter which Employees to update
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to update.
     */
    limit?: number
  }

  /**
   * Employee updateManyAndReturn
   */
  export type EmployeeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * The data used to update Employees.
     */
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyInput>
    /**
     * Filter which Employees to update
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Employee upsert
   */
  export type EmployeeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The filter to search for the Employee to update in case it exists.
     */
    where: EmployeeWhereUniqueInput
    /**
     * In case the Employee found by the `where` argument doesn't exist, create a new Employee with this data.
     */
    create: XOR<EmployeeCreateInput, EmployeeUncheckedCreateInput>
    /**
     * In case the Employee was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmployeeUpdateInput, EmployeeUncheckedUpdateInput>
  }

  /**
   * Employee delete
   */
  export type EmployeeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter which Employee to delete.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee deleteMany
   */
  export type EmployeeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employees to delete
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to delete.
     */
    limit?: number
  }

  /**
   * Employee.manager
   */
  export type Employee$managerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    where?: EmployeeWhereInput
  }

  /**
   * Employee.directReports
   */
  export type Employee$directReportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    where?: EmployeeWhereInput
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    cursor?: EmployeeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee.payrollItems
   */
  export type Employee$payrollItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayrollItem
     */
    select?: PayrollItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayrollItem
     */
    omit?: PayrollItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollItemInclude<ExtArgs> | null
    where?: PayrollItemWhereInput
    orderBy?: PayrollItemOrderByWithRelationInput | PayrollItemOrderByWithRelationInput[]
    cursor?: PayrollItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PayrollItemScalarFieldEnum | PayrollItemScalarFieldEnum[]
  }

  /**
   * Employee.contract
   */
  export type Employee$contractArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    where?: ContractWhereInput
  }

  /**
   * Employee.documents
   */
  export type Employee$documentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    where?: DocumentWhereInput
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    cursor?: DocumentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Employee without action
   */
  export type EmployeeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
  }


  /**
   * Model AuditLog
   */

  export type AggregateAuditLog = {
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  export type AuditLogMinAggregateOutputType = {
    id: string | null
    userId: string | null
    action: string | null
    resource: string | null
    resourceId: string | null
    ipAddress: string | null
    userAgent: string | null
    createdAt: Date | null
  }

  export type AuditLogMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    action: string | null
    resource: string | null
    resourceId: string | null
    ipAddress: string | null
    userAgent: string | null
    createdAt: Date | null
  }

  export type AuditLogCountAggregateOutputType = {
    id: number
    userId: number
    action: number
    resource: number
    resourceId: number
    payload: number
    ipAddress: number
    userAgent: number
    createdAt: number
    _all: number
  }


  export type AuditLogMinAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    resource?: true
    resourceId?: true
    ipAddress?: true
    userAgent?: true
    createdAt?: true
  }

  export type AuditLogMaxAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    resource?: true
    resourceId?: true
    ipAddress?: true
    userAgent?: true
    createdAt?: true
  }

  export type AuditLogCountAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    resource?: true
    resourceId?: true
    payload?: true
    ipAddress?: true
    userAgent?: true
    createdAt?: true
    _all?: true
  }

  export type AuditLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLog to aggregate.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuditLogs
    **/
    _count?: true | AuditLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditLogMaxAggregateInputType
  }

  export type GetAuditLogAggregateType<T extends AuditLogAggregateArgs> = {
        [P in keyof T & keyof AggregateAuditLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditLog[P]>
      : GetScalarType<T[P], AggregateAuditLog[P]>
  }




  export type AuditLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithAggregationInput | AuditLogOrderByWithAggregationInput[]
    by: AuditLogScalarFieldEnum[] | AuditLogScalarFieldEnum
    having?: AuditLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditLogCountAggregateInputType | true
    _min?: AuditLogMinAggregateInputType
    _max?: AuditLogMaxAggregateInputType
  }

  export type AuditLogGroupByOutputType = {
    id: string
    userId: string | null
    action: string
    resource: string
    resourceId: string | null
    payload: JsonValue | null
    ipAddress: string | null
    userAgent: string | null
    createdAt: Date
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  type GetAuditLogGroupByPayload<T extends AuditLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
            : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
        }
      >
    >


  export type AuditLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    action?: boolean
    resource?: boolean
    resourceId?: boolean
    payload?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    action?: boolean
    resource?: boolean
    resourceId?: boolean
    payload?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    action?: boolean
    resource?: boolean
    resourceId?: boolean
    payload?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectScalar = {
    id?: boolean
    userId?: boolean
    action?: boolean
    resource?: boolean
    resourceId?: boolean
    payload?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    createdAt?: boolean
  }

  export type AuditLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "action" | "resource" | "resourceId" | "payload" | "ipAddress" | "userAgent" | "createdAt", ExtArgs["result"]["auditLog"]>

  export type $AuditLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuditLog"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string | null
      action: string
      resource: string
      resourceId: string | null
      payload: Prisma.JsonValue | null
      ipAddress: string | null
      userAgent: string | null
      createdAt: Date
    }, ExtArgs["result"]["auditLog"]>
    composites: {}
  }

  type AuditLogGetPayload<S extends boolean | null | undefined | AuditLogDefaultArgs> = $Result.GetResult<Prisma.$AuditLogPayload, S>

  type AuditLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuditLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuditLogCountAggregateInputType | true
    }

  export interface AuditLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuditLog'], meta: { name: 'AuditLog' } }
    /**
     * Find zero or one AuditLog that matches the filter.
     * @param {AuditLogFindUniqueArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuditLogFindUniqueArgs>(args: SelectSubset<T, AuditLogFindUniqueArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AuditLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuditLogFindUniqueOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuditLogFindUniqueOrThrowArgs>(args: SelectSubset<T, AuditLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuditLogFindFirstArgs>(args?: SelectSubset<T, AuditLogFindFirstArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuditLogFindFirstOrThrowArgs>(args?: SelectSubset<T, AuditLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AuditLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuditLogs
     * const auditLogs = await prisma.auditLog.findMany()
     * 
     * // Get first 10 AuditLogs
     * const auditLogs = await prisma.auditLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuditLogFindManyArgs>(args?: SelectSubset<T, AuditLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AuditLog.
     * @param {AuditLogCreateArgs} args - Arguments to create a AuditLog.
     * @example
     * // Create one AuditLog
     * const AuditLog = await prisma.auditLog.create({
     *   data: {
     *     // ... data to create a AuditLog
     *   }
     * })
     * 
     */
    create<T extends AuditLogCreateArgs>(args: SelectSubset<T, AuditLogCreateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AuditLogs.
     * @param {AuditLogCreateManyArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuditLogCreateManyArgs>(args?: SelectSubset<T, AuditLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuditLogs and returns the data saved in the database.
     * @param {AuditLogCreateManyAndReturnArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuditLogCreateManyAndReturnArgs>(args?: SelectSubset<T, AuditLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AuditLog.
     * @param {AuditLogDeleteArgs} args - Arguments to delete one AuditLog.
     * @example
     * // Delete one AuditLog
     * const AuditLog = await prisma.auditLog.delete({
     *   where: {
     *     // ... filter to delete one AuditLog
     *   }
     * })
     * 
     */
    delete<T extends AuditLogDeleteArgs>(args: SelectSubset<T, AuditLogDeleteArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AuditLog.
     * @param {AuditLogUpdateArgs} args - Arguments to update one AuditLog.
     * @example
     * // Update one AuditLog
     * const auditLog = await prisma.auditLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuditLogUpdateArgs>(args: SelectSubset<T, AuditLogUpdateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AuditLogs.
     * @param {AuditLogDeleteManyArgs} args - Arguments to filter AuditLogs to delete.
     * @example
     * // Delete a few AuditLogs
     * const { count } = await prisma.auditLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuditLogDeleteManyArgs>(args?: SelectSubset<T, AuditLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuditLogUpdateManyArgs>(args: SelectSubset<T, AuditLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs and returns the data updated in the database.
     * @param {AuditLogUpdateManyAndReturnArgs} args - Arguments to update many AuditLogs.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AuditLogUpdateManyAndReturnArgs>(args: SelectSubset<T, AuditLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AuditLog.
     * @param {AuditLogUpsertArgs} args - Arguments to update or create a AuditLog.
     * @example
     * // Update or create a AuditLog
     * const auditLog = await prisma.auditLog.upsert({
     *   create: {
     *     // ... data to create a AuditLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuditLog we want to update
     *   }
     * })
     */
    upsert<T extends AuditLogUpsertArgs>(args: SelectSubset<T, AuditLogUpsertArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogCountArgs} args - Arguments to filter AuditLogs to count.
     * @example
     * // Count the number of AuditLogs
     * const count = await prisma.auditLog.count({
     *   where: {
     *     // ... the filter for the AuditLogs we want to count
     *   }
     * })
    **/
    count<T extends AuditLogCountArgs>(
      args?: Subset<T, AuditLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuditLogAggregateArgs>(args: Subset<T, AuditLogAggregateArgs>): Prisma.PrismaPromise<GetAuditLogAggregateType<T>>

    /**
     * Group by AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AuditLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditLogGroupByArgs['orderBy'] }
        : { orderBy?: AuditLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuditLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuditLog model
   */
  readonly fields: AuditLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuditLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuditLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AuditLog model
   */
  interface AuditLogFieldRefs {
    readonly id: FieldRef<"AuditLog", 'String'>
    readonly userId: FieldRef<"AuditLog", 'String'>
    readonly action: FieldRef<"AuditLog", 'String'>
    readonly resource: FieldRef<"AuditLog", 'String'>
    readonly resourceId: FieldRef<"AuditLog", 'String'>
    readonly payload: FieldRef<"AuditLog", 'Json'>
    readonly ipAddress: FieldRef<"AuditLog", 'String'>
    readonly userAgent: FieldRef<"AuditLog", 'String'>
    readonly createdAt: FieldRef<"AuditLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AuditLog findUnique
   */
  export type AuditLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findUniqueOrThrow
   */
  export type AuditLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findFirst
   */
  export type AuditLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findFirstOrThrow
   */
  export type AuditLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findMany
   */
  export type AuditLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter, which AuditLogs to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog create
   */
  export type AuditLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data needed to create a AuditLog.
     */
    data: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
  }

  /**
   * AuditLog createMany
   */
  export type AuditLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuditLog createManyAndReturn
   */
  export type AuditLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuditLog update
   */
  export type AuditLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data needed to update a AuditLog.
     */
    data: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
    /**
     * Choose, which AuditLog to update.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog updateMany
   */
  export type AuditLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
  }

  /**
   * AuditLog updateManyAndReturn
   */
  export type AuditLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
  }

  /**
   * AuditLog upsert
   */
  export type AuditLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The filter to search for the AuditLog to update in case it exists.
     */
    where: AuditLogWhereUniqueInput
    /**
     * In case the AuditLog found by the `where` argument doesn't exist, create a new AuditLog with this data.
     */
    create: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
    /**
     * In case the AuditLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
  }

  /**
   * AuditLog delete
   */
  export type AuditLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter which AuditLog to delete.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog deleteMany
   */
  export type AuditLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLogs to delete
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to delete.
     */
    limit?: number
  }

  /**
   * AuditLog without action
   */
  export type AuditLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
  }


  /**
   * Model Payroll
   */

  export type AggregatePayroll = {
    _count: PayrollCountAggregateOutputType | null
    _avg: PayrollAvgAggregateOutputType | null
    _sum: PayrollSumAggregateOutputType | null
    _min: PayrollMinAggregateOutputType | null
    _max: PayrollMaxAggregateOutputType | null
  }

  export type PayrollAvgAggregateOutputType = {
    month: number | null
    year: number | null
  }

  export type PayrollSumAggregateOutputType = {
    month: number | null
    year: number | null
  }

  export type PayrollMinAggregateOutputType = {
    id: string | null
    companyId: string | null
    month: number | null
    year: number | null
    status: $Enums.PayrollStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PayrollMaxAggregateOutputType = {
    id: string | null
    companyId: string | null
    month: number | null
    year: number | null
    status: $Enums.PayrollStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PayrollCountAggregateOutputType = {
    id: number
    companyId: number
    month: number
    year: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PayrollAvgAggregateInputType = {
    month?: true
    year?: true
  }

  export type PayrollSumAggregateInputType = {
    month?: true
    year?: true
  }

  export type PayrollMinAggregateInputType = {
    id?: true
    companyId?: true
    month?: true
    year?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PayrollMaxAggregateInputType = {
    id?: true
    companyId?: true
    month?: true
    year?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PayrollCountAggregateInputType = {
    id?: true
    companyId?: true
    month?: true
    year?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PayrollAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payroll to aggregate.
     */
    where?: PayrollWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payrolls to fetch.
     */
    orderBy?: PayrollOrderByWithRelationInput | PayrollOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PayrollWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payrolls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payrolls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payrolls
    **/
    _count?: true | PayrollCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PayrollAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PayrollSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PayrollMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PayrollMaxAggregateInputType
  }

  export type GetPayrollAggregateType<T extends PayrollAggregateArgs> = {
        [P in keyof T & keyof AggregatePayroll]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayroll[P]>
      : GetScalarType<T[P], AggregatePayroll[P]>
  }




  export type PayrollGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PayrollWhereInput
    orderBy?: PayrollOrderByWithAggregationInput | PayrollOrderByWithAggregationInput[]
    by: PayrollScalarFieldEnum[] | PayrollScalarFieldEnum
    having?: PayrollScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PayrollCountAggregateInputType | true
    _avg?: PayrollAvgAggregateInputType
    _sum?: PayrollSumAggregateInputType
    _min?: PayrollMinAggregateInputType
    _max?: PayrollMaxAggregateInputType
  }

  export type PayrollGroupByOutputType = {
    id: string
    companyId: string
    month: number
    year: number
    status: $Enums.PayrollStatus
    createdAt: Date
    updatedAt: Date
    _count: PayrollCountAggregateOutputType | null
    _avg: PayrollAvgAggregateOutputType | null
    _sum: PayrollSumAggregateOutputType | null
    _min: PayrollMinAggregateOutputType | null
    _max: PayrollMaxAggregateOutputType | null
  }

  type GetPayrollGroupByPayload<T extends PayrollGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PayrollGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PayrollGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PayrollGroupByOutputType[P]>
            : GetScalarType<T[P], PayrollGroupByOutputType[P]>
        }
      >
    >


  export type PayrollSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    month?: boolean
    year?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    items?: boolean | Payroll$itemsArgs<ExtArgs>
    _count?: boolean | PayrollCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payroll"]>

  export type PayrollSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    month?: boolean
    year?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payroll"]>

  export type PayrollSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    month?: boolean
    year?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payroll"]>

  export type PayrollSelectScalar = {
    id?: boolean
    companyId?: boolean
    month?: boolean
    year?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PayrollOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "companyId" | "month" | "year" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["payroll"]>
  export type PayrollInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    items?: boolean | Payroll$itemsArgs<ExtArgs>
    _count?: boolean | PayrollCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PayrollIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }
  export type PayrollIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }

  export type $PayrollPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payroll"
    objects: {
      company: Prisma.$CompanyPayload<ExtArgs>
      items: Prisma.$PayrollItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      companyId: string
      month: number
      year: number
      status: $Enums.PayrollStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["payroll"]>
    composites: {}
  }

  type PayrollGetPayload<S extends boolean | null | undefined | PayrollDefaultArgs> = $Result.GetResult<Prisma.$PayrollPayload, S>

  type PayrollCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PayrollFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PayrollCountAggregateInputType | true
    }

  export interface PayrollDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payroll'], meta: { name: 'Payroll' } }
    /**
     * Find zero or one Payroll that matches the filter.
     * @param {PayrollFindUniqueArgs} args - Arguments to find a Payroll
     * @example
     * // Get one Payroll
     * const payroll = await prisma.payroll.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PayrollFindUniqueArgs>(args: SelectSubset<T, PayrollFindUniqueArgs<ExtArgs>>): Prisma__PayrollClient<$Result.GetResult<Prisma.$PayrollPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payroll that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PayrollFindUniqueOrThrowArgs} args - Arguments to find a Payroll
     * @example
     * // Get one Payroll
     * const payroll = await prisma.payroll.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PayrollFindUniqueOrThrowArgs>(args: SelectSubset<T, PayrollFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PayrollClient<$Result.GetResult<Prisma.$PayrollPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payroll that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayrollFindFirstArgs} args - Arguments to find a Payroll
     * @example
     * // Get one Payroll
     * const payroll = await prisma.payroll.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PayrollFindFirstArgs>(args?: SelectSubset<T, PayrollFindFirstArgs<ExtArgs>>): Prisma__PayrollClient<$Result.GetResult<Prisma.$PayrollPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payroll that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayrollFindFirstOrThrowArgs} args - Arguments to find a Payroll
     * @example
     * // Get one Payroll
     * const payroll = await prisma.payroll.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PayrollFindFirstOrThrowArgs>(args?: SelectSubset<T, PayrollFindFirstOrThrowArgs<ExtArgs>>): Prisma__PayrollClient<$Result.GetResult<Prisma.$PayrollPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payrolls that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayrollFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payrolls
     * const payrolls = await prisma.payroll.findMany()
     * 
     * // Get first 10 Payrolls
     * const payrolls = await prisma.payroll.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const payrollWithIdOnly = await prisma.payroll.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PayrollFindManyArgs>(args?: SelectSubset<T, PayrollFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayrollPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payroll.
     * @param {PayrollCreateArgs} args - Arguments to create a Payroll.
     * @example
     * // Create one Payroll
     * const Payroll = await prisma.payroll.create({
     *   data: {
     *     // ... data to create a Payroll
     *   }
     * })
     * 
     */
    create<T extends PayrollCreateArgs>(args: SelectSubset<T, PayrollCreateArgs<ExtArgs>>): Prisma__PayrollClient<$Result.GetResult<Prisma.$PayrollPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payrolls.
     * @param {PayrollCreateManyArgs} args - Arguments to create many Payrolls.
     * @example
     * // Create many Payrolls
     * const payroll = await prisma.payroll.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PayrollCreateManyArgs>(args?: SelectSubset<T, PayrollCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payrolls and returns the data saved in the database.
     * @param {PayrollCreateManyAndReturnArgs} args - Arguments to create many Payrolls.
     * @example
     * // Create many Payrolls
     * const payroll = await prisma.payroll.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payrolls and only return the `id`
     * const payrollWithIdOnly = await prisma.payroll.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PayrollCreateManyAndReturnArgs>(args?: SelectSubset<T, PayrollCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayrollPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payroll.
     * @param {PayrollDeleteArgs} args - Arguments to delete one Payroll.
     * @example
     * // Delete one Payroll
     * const Payroll = await prisma.payroll.delete({
     *   where: {
     *     // ... filter to delete one Payroll
     *   }
     * })
     * 
     */
    delete<T extends PayrollDeleteArgs>(args: SelectSubset<T, PayrollDeleteArgs<ExtArgs>>): Prisma__PayrollClient<$Result.GetResult<Prisma.$PayrollPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payroll.
     * @param {PayrollUpdateArgs} args - Arguments to update one Payroll.
     * @example
     * // Update one Payroll
     * const payroll = await prisma.payroll.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PayrollUpdateArgs>(args: SelectSubset<T, PayrollUpdateArgs<ExtArgs>>): Prisma__PayrollClient<$Result.GetResult<Prisma.$PayrollPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payrolls.
     * @param {PayrollDeleteManyArgs} args - Arguments to filter Payrolls to delete.
     * @example
     * // Delete a few Payrolls
     * const { count } = await prisma.payroll.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PayrollDeleteManyArgs>(args?: SelectSubset<T, PayrollDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payrolls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayrollUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payrolls
     * const payroll = await prisma.payroll.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PayrollUpdateManyArgs>(args: SelectSubset<T, PayrollUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payrolls and returns the data updated in the database.
     * @param {PayrollUpdateManyAndReturnArgs} args - Arguments to update many Payrolls.
     * @example
     * // Update many Payrolls
     * const payroll = await prisma.payroll.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payrolls and only return the `id`
     * const payrollWithIdOnly = await prisma.payroll.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PayrollUpdateManyAndReturnArgs>(args: SelectSubset<T, PayrollUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayrollPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payroll.
     * @param {PayrollUpsertArgs} args - Arguments to update or create a Payroll.
     * @example
     * // Update or create a Payroll
     * const payroll = await prisma.payroll.upsert({
     *   create: {
     *     // ... data to create a Payroll
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payroll we want to update
     *   }
     * })
     */
    upsert<T extends PayrollUpsertArgs>(args: SelectSubset<T, PayrollUpsertArgs<ExtArgs>>): Prisma__PayrollClient<$Result.GetResult<Prisma.$PayrollPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payrolls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayrollCountArgs} args - Arguments to filter Payrolls to count.
     * @example
     * // Count the number of Payrolls
     * const count = await prisma.payroll.count({
     *   where: {
     *     // ... the filter for the Payrolls we want to count
     *   }
     * })
    **/
    count<T extends PayrollCountArgs>(
      args?: Subset<T, PayrollCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PayrollCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payroll.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayrollAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PayrollAggregateArgs>(args: Subset<T, PayrollAggregateArgs>): Prisma.PrismaPromise<GetPayrollAggregateType<T>>

    /**
     * Group by Payroll.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayrollGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PayrollGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PayrollGroupByArgs['orderBy'] }
        : { orderBy?: PayrollGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PayrollGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPayrollGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payroll model
   */
  readonly fields: PayrollFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payroll.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PayrollClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    items<T extends Payroll$itemsArgs<ExtArgs> = {}>(args?: Subset<T, Payroll$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayrollItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Payroll model
   */
  interface PayrollFieldRefs {
    readonly id: FieldRef<"Payroll", 'String'>
    readonly companyId: FieldRef<"Payroll", 'String'>
    readonly month: FieldRef<"Payroll", 'Int'>
    readonly year: FieldRef<"Payroll", 'Int'>
    readonly status: FieldRef<"Payroll", 'PayrollStatus'>
    readonly createdAt: FieldRef<"Payroll", 'DateTime'>
    readonly updatedAt: FieldRef<"Payroll", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Payroll findUnique
   */
  export type PayrollFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payroll
     */
    select?: PayrollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payroll
     */
    omit?: PayrollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollInclude<ExtArgs> | null
    /**
     * Filter, which Payroll to fetch.
     */
    where: PayrollWhereUniqueInput
  }

  /**
   * Payroll findUniqueOrThrow
   */
  export type PayrollFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payroll
     */
    select?: PayrollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payroll
     */
    omit?: PayrollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollInclude<ExtArgs> | null
    /**
     * Filter, which Payroll to fetch.
     */
    where: PayrollWhereUniqueInput
  }

  /**
   * Payroll findFirst
   */
  export type PayrollFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payroll
     */
    select?: PayrollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payroll
     */
    omit?: PayrollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollInclude<ExtArgs> | null
    /**
     * Filter, which Payroll to fetch.
     */
    where?: PayrollWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payrolls to fetch.
     */
    orderBy?: PayrollOrderByWithRelationInput | PayrollOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payrolls.
     */
    cursor?: PayrollWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payrolls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payrolls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payrolls.
     */
    distinct?: PayrollScalarFieldEnum | PayrollScalarFieldEnum[]
  }

  /**
   * Payroll findFirstOrThrow
   */
  export type PayrollFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payroll
     */
    select?: PayrollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payroll
     */
    omit?: PayrollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollInclude<ExtArgs> | null
    /**
     * Filter, which Payroll to fetch.
     */
    where?: PayrollWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payrolls to fetch.
     */
    orderBy?: PayrollOrderByWithRelationInput | PayrollOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payrolls.
     */
    cursor?: PayrollWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payrolls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payrolls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payrolls.
     */
    distinct?: PayrollScalarFieldEnum | PayrollScalarFieldEnum[]
  }

  /**
   * Payroll findMany
   */
  export type PayrollFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payroll
     */
    select?: PayrollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payroll
     */
    omit?: PayrollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollInclude<ExtArgs> | null
    /**
     * Filter, which Payrolls to fetch.
     */
    where?: PayrollWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payrolls to fetch.
     */
    orderBy?: PayrollOrderByWithRelationInput | PayrollOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payrolls.
     */
    cursor?: PayrollWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payrolls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payrolls.
     */
    skip?: number
    distinct?: PayrollScalarFieldEnum | PayrollScalarFieldEnum[]
  }

  /**
   * Payroll create
   */
  export type PayrollCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payroll
     */
    select?: PayrollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payroll
     */
    omit?: PayrollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollInclude<ExtArgs> | null
    /**
     * The data needed to create a Payroll.
     */
    data: XOR<PayrollCreateInput, PayrollUncheckedCreateInput>
  }

  /**
   * Payroll createMany
   */
  export type PayrollCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payrolls.
     */
    data: PayrollCreateManyInput | PayrollCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payroll createManyAndReturn
   */
  export type PayrollCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payroll
     */
    select?: PayrollSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payroll
     */
    omit?: PayrollOmit<ExtArgs> | null
    /**
     * The data used to create many Payrolls.
     */
    data: PayrollCreateManyInput | PayrollCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payroll update
   */
  export type PayrollUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payroll
     */
    select?: PayrollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payroll
     */
    omit?: PayrollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollInclude<ExtArgs> | null
    /**
     * The data needed to update a Payroll.
     */
    data: XOR<PayrollUpdateInput, PayrollUncheckedUpdateInput>
    /**
     * Choose, which Payroll to update.
     */
    where: PayrollWhereUniqueInput
  }

  /**
   * Payroll updateMany
   */
  export type PayrollUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payrolls.
     */
    data: XOR<PayrollUpdateManyMutationInput, PayrollUncheckedUpdateManyInput>
    /**
     * Filter which Payrolls to update
     */
    where?: PayrollWhereInput
    /**
     * Limit how many Payrolls to update.
     */
    limit?: number
  }

  /**
   * Payroll updateManyAndReturn
   */
  export type PayrollUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payroll
     */
    select?: PayrollSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payroll
     */
    omit?: PayrollOmit<ExtArgs> | null
    /**
     * The data used to update Payrolls.
     */
    data: XOR<PayrollUpdateManyMutationInput, PayrollUncheckedUpdateManyInput>
    /**
     * Filter which Payrolls to update
     */
    where?: PayrollWhereInput
    /**
     * Limit how many Payrolls to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payroll upsert
   */
  export type PayrollUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payroll
     */
    select?: PayrollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payroll
     */
    omit?: PayrollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollInclude<ExtArgs> | null
    /**
     * The filter to search for the Payroll to update in case it exists.
     */
    where: PayrollWhereUniqueInput
    /**
     * In case the Payroll found by the `where` argument doesn't exist, create a new Payroll with this data.
     */
    create: XOR<PayrollCreateInput, PayrollUncheckedCreateInput>
    /**
     * In case the Payroll was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PayrollUpdateInput, PayrollUncheckedUpdateInput>
  }

  /**
   * Payroll delete
   */
  export type PayrollDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payroll
     */
    select?: PayrollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payroll
     */
    omit?: PayrollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollInclude<ExtArgs> | null
    /**
     * Filter which Payroll to delete.
     */
    where: PayrollWhereUniqueInput
  }

  /**
   * Payroll deleteMany
   */
  export type PayrollDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payrolls to delete
     */
    where?: PayrollWhereInput
    /**
     * Limit how many Payrolls to delete.
     */
    limit?: number
  }

  /**
   * Payroll.items
   */
  export type Payroll$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayrollItem
     */
    select?: PayrollItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayrollItem
     */
    omit?: PayrollItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollItemInclude<ExtArgs> | null
    where?: PayrollItemWhereInput
    orderBy?: PayrollItemOrderByWithRelationInput | PayrollItemOrderByWithRelationInput[]
    cursor?: PayrollItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PayrollItemScalarFieldEnum | PayrollItemScalarFieldEnum[]
  }

  /**
   * Payroll without action
   */
  export type PayrollDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payroll
     */
    select?: PayrollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payroll
     */
    omit?: PayrollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollInclude<ExtArgs> | null
  }


  /**
   * Model PayrollItem
   */

  export type AggregatePayrollItem = {
    _count: PayrollItemCountAggregateOutputType | null
    _avg: PayrollItemAvgAggregateOutputType | null
    _sum: PayrollItemSumAggregateOutputType | null
    _min: PayrollItemMinAggregateOutputType | null
    _max: PayrollItemMaxAggregateOutputType | null
  }

  export type PayrollItemAvgAggregateOutputType = {
    grossSalary: number | null
    netSalary: number | null
    totalDeductions: number | null
    totalContributions: number | null
  }

  export type PayrollItemSumAggregateOutputType = {
    grossSalary: number | null
    netSalary: number | null
    totalDeductions: number | null
    totalContributions: number | null
  }

  export type PayrollItemMinAggregateOutputType = {
    id: string | null
    payrollId: string | null
    employeeId: string | null
    grossSalary: number | null
    netSalary: number | null
    totalDeductions: number | null
    totalContributions: number | null
    status: $Enums.PayrollItemStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PayrollItemMaxAggregateOutputType = {
    id: string | null
    payrollId: string | null
    employeeId: string | null
    grossSalary: number | null
    netSalary: number | null
    totalDeductions: number | null
    totalContributions: number | null
    status: $Enums.PayrollItemStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PayrollItemCountAggregateOutputType = {
    id: number
    payrollId: number
    employeeId: number
    grossSalary: number
    netSalary: number
    totalDeductions: number
    totalContributions: number
    details: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PayrollItemAvgAggregateInputType = {
    grossSalary?: true
    netSalary?: true
    totalDeductions?: true
    totalContributions?: true
  }

  export type PayrollItemSumAggregateInputType = {
    grossSalary?: true
    netSalary?: true
    totalDeductions?: true
    totalContributions?: true
  }

  export type PayrollItemMinAggregateInputType = {
    id?: true
    payrollId?: true
    employeeId?: true
    grossSalary?: true
    netSalary?: true
    totalDeductions?: true
    totalContributions?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PayrollItemMaxAggregateInputType = {
    id?: true
    payrollId?: true
    employeeId?: true
    grossSalary?: true
    netSalary?: true
    totalDeductions?: true
    totalContributions?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PayrollItemCountAggregateInputType = {
    id?: true
    payrollId?: true
    employeeId?: true
    grossSalary?: true
    netSalary?: true
    totalDeductions?: true
    totalContributions?: true
    details?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PayrollItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PayrollItem to aggregate.
     */
    where?: PayrollItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PayrollItems to fetch.
     */
    orderBy?: PayrollItemOrderByWithRelationInput | PayrollItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PayrollItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PayrollItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PayrollItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PayrollItems
    **/
    _count?: true | PayrollItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PayrollItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PayrollItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PayrollItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PayrollItemMaxAggregateInputType
  }

  export type GetPayrollItemAggregateType<T extends PayrollItemAggregateArgs> = {
        [P in keyof T & keyof AggregatePayrollItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayrollItem[P]>
      : GetScalarType<T[P], AggregatePayrollItem[P]>
  }




  export type PayrollItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PayrollItemWhereInput
    orderBy?: PayrollItemOrderByWithAggregationInput | PayrollItemOrderByWithAggregationInput[]
    by: PayrollItemScalarFieldEnum[] | PayrollItemScalarFieldEnum
    having?: PayrollItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PayrollItemCountAggregateInputType | true
    _avg?: PayrollItemAvgAggregateInputType
    _sum?: PayrollItemSumAggregateInputType
    _min?: PayrollItemMinAggregateInputType
    _max?: PayrollItemMaxAggregateInputType
  }

  export type PayrollItemGroupByOutputType = {
    id: string
    payrollId: string
    employeeId: string
    grossSalary: number
    netSalary: number
    totalDeductions: number
    totalContributions: number
    details: JsonValue
    status: $Enums.PayrollItemStatus
    createdAt: Date
    updatedAt: Date
    _count: PayrollItemCountAggregateOutputType | null
    _avg: PayrollItemAvgAggregateOutputType | null
    _sum: PayrollItemSumAggregateOutputType | null
    _min: PayrollItemMinAggregateOutputType | null
    _max: PayrollItemMaxAggregateOutputType | null
  }

  type GetPayrollItemGroupByPayload<T extends PayrollItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PayrollItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PayrollItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PayrollItemGroupByOutputType[P]>
            : GetScalarType<T[P], PayrollItemGroupByOutputType[P]>
        }
      >
    >


  export type PayrollItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    payrollId?: boolean
    employeeId?: boolean
    grossSalary?: boolean
    netSalary?: boolean
    totalDeductions?: boolean
    totalContributions?: boolean
    details?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    payroll?: boolean | PayrollDefaultArgs<ExtArgs>
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payrollItem"]>

  export type PayrollItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    payrollId?: boolean
    employeeId?: boolean
    grossSalary?: boolean
    netSalary?: boolean
    totalDeductions?: boolean
    totalContributions?: boolean
    details?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    payroll?: boolean | PayrollDefaultArgs<ExtArgs>
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payrollItem"]>

  export type PayrollItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    payrollId?: boolean
    employeeId?: boolean
    grossSalary?: boolean
    netSalary?: boolean
    totalDeductions?: boolean
    totalContributions?: boolean
    details?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    payroll?: boolean | PayrollDefaultArgs<ExtArgs>
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payrollItem"]>

  export type PayrollItemSelectScalar = {
    id?: boolean
    payrollId?: boolean
    employeeId?: boolean
    grossSalary?: boolean
    netSalary?: boolean
    totalDeductions?: boolean
    totalContributions?: boolean
    details?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PayrollItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "payrollId" | "employeeId" | "grossSalary" | "netSalary" | "totalDeductions" | "totalContributions" | "details" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["payrollItem"]>
  export type PayrollItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payroll?: boolean | PayrollDefaultArgs<ExtArgs>
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }
  export type PayrollItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payroll?: boolean | PayrollDefaultArgs<ExtArgs>
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }
  export type PayrollItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payroll?: boolean | PayrollDefaultArgs<ExtArgs>
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }

  export type $PayrollItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PayrollItem"
    objects: {
      payroll: Prisma.$PayrollPayload<ExtArgs>
      employee: Prisma.$EmployeePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      payrollId: string
      employeeId: string
      grossSalary: number
      netSalary: number
      totalDeductions: number
      totalContributions: number
      details: Prisma.JsonValue
      status: $Enums.PayrollItemStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["payrollItem"]>
    composites: {}
  }

  type PayrollItemGetPayload<S extends boolean | null | undefined | PayrollItemDefaultArgs> = $Result.GetResult<Prisma.$PayrollItemPayload, S>

  type PayrollItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PayrollItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PayrollItemCountAggregateInputType | true
    }

  export interface PayrollItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PayrollItem'], meta: { name: 'PayrollItem' } }
    /**
     * Find zero or one PayrollItem that matches the filter.
     * @param {PayrollItemFindUniqueArgs} args - Arguments to find a PayrollItem
     * @example
     * // Get one PayrollItem
     * const payrollItem = await prisma.payrollItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PayrollItemFindUniqueArgs>(args: SelectSubset<T, PayrollItemFindUniqueArgs<ExtArgs>>): Prisma__PayrollItemClient<$Result.GetResult<Prisma.$PayrollItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PayrollItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PayrollItemFindUniqueOrThrowArgs} args - Arguments to find a PayrollItem
     * @example
     * // Get one PayrollItem
     * const payrollItem = await prisma.payrollItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PayrollItemFindUniqueOrThrowArgs>(args: SelectSubset<T, PayrollItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PayrollItemClient<$Result.GetResult<Prisma.$PayrollItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PayrollItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayrollItemFindFirstArgs} args - Arguments to find a PayrollItem
     * @example
     * // Get one PayrollItem
     * const payrollItem = await prisma.payrollItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PayrollItemFindFirstArgs>(args?: SelectSubset<T, PayrollItemFindFirstArgs<ExtArgs>>): Prisma__PayrollItemClient<$Result.GetResult<Prisma.$PayrollItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PayrollItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayrollItemFindFirstOrThrowArgs} args - Arguments to find a PayrollItem
     * @example
     * // Get one PayrollItem
     * const payrollItem = await prisma.payrollItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PayrollItemFindFirstOrThrowArgs>(args?: SelectSubset<T, PayrollItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__PayrollItemClient<$Result.GetResult<Prisma.$PayrollItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PayrollItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayrollItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PayrollItems
     * const payrollItems = await prisma.payrollItem.findMany()
     * 
     * // Get first 10 PayrollItems
     * const payrollItems = await prisma.payrollItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const payrollItemWithIdOnly = await prisma.payrollItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PayrollItemFindManyArgs>(args?: SelectSubset<T, PayrollItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayrollItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PayrollItem.
     * @param {PayrollItemCreateArgs} args - Arguments to create a PayrollItem.
     * @example
     * // Create one PayrollItem
     * const PayrollItem = await prisma.payrollItem.create({
     *   data: {
     *     // ... data to create a PayrollItem
     *   }
     * })
     * 
     */
    create<T extends PayrollItemCreateArgs>(args: SelectSubset<T, PayrollItemCreateArgs<ExtArgs>>): Prisma__PayrollItemClient<$Result.GetResult<Prisma.$PayrollItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PayrollItems.
     * @param {PayrollItemCreateManyArgs} args - Arguments to create many PayrollItems.
     * @example
     * // Create many PayrollItems
     * const payrollItem = await prisma.payrollItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PayrollItemCreateManyArgs>(args?: SelectSubset<T, PayrollItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PayrollItems and returns the data saved in the database.
     * @param {PayrollItemCreateManyAndReturnArgs} args - Arguments to create many PayrollItems.
     * @example
     * // Create many PayrollItems
     * const payrollItem = await prisma.payrollItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PayrollItems and only return the `id`
     * const payrollItemWithIdOnly = await prisma.payrollItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PayrollItemCreateManyAndReturnArgs>(args?: SelectSubset<T, PayrollItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayrollItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PayrollItem.
     * @param {PayrollItemDeleteArgs} args - Arguments to delete one PayrollItem.
     * @example
     * // Delete one PayrollItem
     * const PayrollItem = await prisma.payrollItem.delete({
     *   where: {
     *     // ... filter to delete one PayrollItem
     *   }
     * })
     * 
     */
    delete<T extends PayrollItemDeleteArgs>(args: SelectSubset<T, PayrollItemDeleteArgs<ExtArgs>>): Prisma__PayrollItemClient<$Result.GetResult<Prisma.$PayrollItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PayrollItem.
     * @param {PayrollItemUpdateArgs} args - Arguments to update one PayrollItem.
     * @example
     * // Update one PayrollItem
     * const payrollItem = await prisma.payrollItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PayrollItemUpdateArgs>(args: SelectSubset<T, PayrollItemUpdateArgs<ExtArgs>>): Prisma__PayrollItemClient<$Result.GetResult<Prisma.$PayrollItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PayrollItems.
     * @param {PayrollItemDeleteManyArgs} args - Arguments to filter PayrollItems to delete.
     * @example
     * // Delete a few PayrollItems
     * const { count } = await prisma.payrollItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PayrollItemDeleteManyArgs>(args?: SelectSubset<T, PayrollItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PayrollItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayrollItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PayrollItems
     * const payrollItem = await prisma.payrollItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PayrollItemUpdateManyArgs>(args: SelectSubset<T, PayrollItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PayrollItems and returns the data updated in the database.
     * @param {PayrollItemUpdateManyAndReturnArgs} args - Arguments to update many PayrollItems.
     * @example
     * // Update many PayrollItems
     * const payrollItem = await prisma.payrollItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PayrollItems and only return the `id`
     * const payrollItemWithIdOnly = await prisma.payrollItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PayrollItemUpdateManyAndReturnArgs>(args: SelectSubset<T, PayrollItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayrollItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PayrollItem.
     * @param {PayrollItemUpsertArgs} args - Arguments to update or create a PayrollItem.
     * @example
     * // Update or create a PayrollItem
     * const payrollItem = await prisma.payrollItem.upsert({
     *   create: {
     *     // ... data to create a PayrollItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PayrollItem we want to update
     *   }
     * })
     */
    upsert<T extends PayrollItemUpsertArgs>(args: SelectSubset<T, PayrollItemUpsertArgs<ExtArgs>>): Prisma__PayrollItemClient<$Result.GetResult<Prisma.$PayrollItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PayrollItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayrollItemCountArgs} args - Arguments to filter PayrollItems to count.
     * @example
     * // Count the number of PayrollItems
     * const count = await prisma.payrollItem.count({
     *   where: {
     *     // ... the filter for the PayrollItems we want to count
     *   }
     * })
    **/
    count<T extends PayrollItemCountArgs>(
      args?: Subset<T, PayrollItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PayrollItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PayrollItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayrollItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PayrollItemAggregateArgs>(args: Subset<T, PayrollItemAggregateArgs>): Prisma.PrismaPromise<GetPayrollItemAggregateType<T>>

    /**
     * Group by PayrollItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayrollItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PayrollItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PayrollItemGroupByArgs['orderBy'] }
        : { orderBy?: PayrollItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PayrollItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPayrollItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PayrollItem model
   */
  readonly fields: PayrollItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PayrollItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PayrollItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    payroll<T extends PayrollDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PayrollDefaultArgs<ExtArgs>>): Prisma__PayrollClient<$Result.GetResult<Prisma.$PayrollPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    employee<T extends EmployeeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmployeeDefaultArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PayrollItem model
   */
  interface PayrollItemFieldRefs {
    readonly id: FieldRef<"PayrollItem", 'String'>
    readonly payrollId: FieldRef<"PayrollItem", 'String'>
    readonly employeeId: FieldRef<"PayrollItem", 'String'>
    readonly grossSalary: FieldRef<"PayrollItem", 'Float'>
    readonly netSalary: FieldRef<"PayrollItem", 'Float'>
    readonly totalDeductions: FieldRef<"PayrollItem", 'Float'>
    readonly totalContributions: FieldRef<"PayrollItem", 'Float'>
    readonly details: FieldRef<"PayrollItem", 'Json'>
    readonly status: FieldRef<"PayrollItem", 'PayrollItemStatus'>
    readonly createdAt: FieldRef<"PayrollItem", 'DateTime'>
    readonly updatedAt: FieldRef<"PayrollItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PayrollItem findUnique
   */
  export type PayrollItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayrollItem
     */
    select?: PayrollItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayrollItem
     */
    omit?: PayrollItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollItemInclude<ExtArgs> | null
    /**
     * Filter, which PayrollItem to fetch.
     */
    where: PayrollItemWhereUniqueInput
  }

  /**
   * PayrollItem findUniqueOrThrow
   */
  export type PayrollItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayrollItem
     */
    select?: PayrollItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayrollItem
     */
    omit?: PayrollItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollItemInclude<ExtArgs> | null
    /**
     * Filter, which PayrollItem to fetch.
     */
    where: PayrollItemWhereUniqueInput
  }

  /**
   * PayrollItem findFirst
   */
  export type PayrollItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayrollItem
     */
    select?: PayrollItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayrollItem
     */
    omit?: PayrollItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollItemInclude<ExtArgs> | null
    /**
     * Filter, which PayrollItem to fetch.
     */
    where?: PayrollItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PayrollItems to fetch.
     */
    orderBy?: PayrollItemOrderByWithRelationInput | PayrollItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PayrollItems.
     */
    cursor?: PayrollItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PayrollItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PayrollItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PayrollItems.
     */
    distinct?: PayrollItemScalarFieldEnum | PayrollItemScalarFieldEnum[]
  }

  /**
   * PayrollItem findFirstOrThrow
   */
  export type PayrollItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayrollItem
     */
    select?: PayrollItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayrollItem
     */
    omit?: PayrollItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollItemInclude<ExtArgs> | null
    /**
     * Filter, which PayrollItem to fetch.
     */
    where?: PayrollItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PayrollItems to fetch.
     */
    orderBy?: PayrollItemOrderByWithRelationInput | PayrollItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PayrollItems.
     */
    cursor?: PayrollItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PayrollItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PayrollItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PayrollItems.
     */
    distinct?: PayrollItemScalarFieldEnum | PayrollItemScalarFieldEnum[]
  }

  /**
   * PayrollItem findMany
   */
  export type PayrollItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayrollItem
     */
    select?: PayrollItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayrollItem
     */
    omit?: PayrollItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollItemInclude<ExtArgs> | null
    /**
     * Filter, which PayrollItems to fetch.
     */
    where?: PayrollItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PayrollItems to fetch.
     */
    orderBy?: PayrollItemOrderByWithRelationInput | PayrollItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PayrollItems.
     */
    cursor?: PayrollItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PayrollItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PayrollItems.
     */
    skip?: number
    distinct?: PayrollItemScalarFieldEnum | PayrollItemScalarFieldEnum[]
  }

  /**
   * PayrollItem create
   */
  export type PayrollItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayrollItem
     */
    select?: PayrollItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayrollItem
     */
    omit?: PayrollItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollItemInclude<ExtArgs> | null
    /**
     * The data needed to create a PayrollItem.
     */
    data: XOR<PayrollItemCreateInput, PayrollItemUncheckedCreateInput>
  }

  /**
   * PayrollItem createMany
   */
  export type PayrollItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PayrollItems.
     */
    data: PayrollItemCreateManyInput | PayrollItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PayrollItem createManyAndReturn
   */
  export type PayrollItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayrollItem
     */
    select?: PayrollItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PayrollItem
     */
    omit?: PayrollItemOmit<ExtArgs> | null
    /**
     * The data used to create many PayrollItems.
     */
    data: PayrollItemCreateManyInput | PayrollItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PayrollItem update
   */
  export type PayrollItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayrollItem
     */
    select?: PayrollItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayrollItem
     */
    omit?: PayrollItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollItemInclude<ExtArgs> | null
    /**
     * The data needed to update a PayrollItem.
     */
    data: XOR<PayrollItemUpdateInput, PayrollItemUncheckedUpdateInput>
    /**
     * Choose, which PayrollItem to update.
     */
    where: PayrollItemWhereUniqueInput
  }

  /**
   * PayrollItem updateMany
   */
  export type PayrollItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PayrollItems.
     */
    data: XOR<PayrollItemUpdateManyMutationInput, PayrollItemUncheckedUpdateManyInput>
    /**
     * Filter which PayrollItems to update
     */
    where?: PayrollItemWhereInput
    /**
     * Limit how many PayrollItems to update.
     */
    limit?: number
  }

  /**
   * PayrollItem updateManyAndReturn
   */
  export type PayrollItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayrollItem
     */
    select?: PayrollItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PayrollItem
     */
    omit?: PayrollItemOmit<ExtArgs> | null
    /**
     * The data used to update PayrollItems.
     */
    data: XOR<PayrollItemUpdateManyMutationInput, PayrollItemUncheckedUpdateManyInput>
    /**
     * Filter which PayrollItems to update
     */
    where?: PayrollItemWhereInput
    /**
     * Limit how many PayrollItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PayrollItem upsert
   */
  export type PayrollItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayrollItem
     */
    select?: PayrollItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayrollItem
     */
    omit?: PayrollItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollItemInclude<ExtArgs> | null
    /**
     * The filter to search for the PayrollItem to update in case it exists.
     */
    where: PayrollItemWhereUniqueInput
    /**
     * In case the PayrollItem found by the `where` argument doesn't exist, create a new PayrollItem with this data.
     */
    create: XOR<PayrollItemCreateInput, PayrollItemUncheckedCreateInput>
    /**
     * In case the PayrollItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PayrollItemUpdateInput, PayrollItemUncheckedUpdateInput>
  }

  /**
   * PayrollItem delete
   */
  export type PayrollItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayrollItem
     */
    select?: PayrollItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayrollItem
     */
    omit?: PayrollItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollItemInclude<ExtArgs> | null
    /**
     * Filter which PayrollItem to delete.
     */
    where: PayrollItemWhereUniqueInput
  }

  /**
   * PayrollItem deleteMany
   */
  export type PayrollItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PayrollItems to delete
     */
    where?: PayrollItemWhereInput
    /**
     * Limit how many PayrollItems to delete.
     */
    limit?: number
  }

  /**
   * PayrollItem without action
   */
  export type PayrollItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayrollItem
     */
    select?: PayrollItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayrollItem
     */
    omit?: PayrollItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollItemInclude<ExtArgs> | null
  }


  /**
   * Model Offer
   */

  export type AggregateOffer = {
    _count: OfferCountAggregateOutputType | null
    _avg: OfferAvgAggregateOutputType | null
    _sum: OfferSumAggregateOutputType | null
    _min: OfferMinAggregateOutputType | null
    _max: OfferMaxAggregateOutputType | null
  }

  export type OfferAvgAggregateOutputType = {
    salary: number | null
  }

  export type OfferSumAggregateOutputType = {
    salary: number | null
  }

  export type OfferMinAggregateOutputType = {
    id: string | null
    companyId: string | null
    candidateName: string | null
    candidateEmail: string | null
    jobTitle: string | null
    country: $Enums.CountryCode | null
    salary: number | null
    status: $Enums.OfferStatus | null
    validUntil: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OfferMaxAggregateOutputType = {
    id: string | null
    companyId: string | null
    candidateName: string | null
    candidateEmail: string | null
    jobTitle: string | null
    country: $Enums.CountryCode | null
    salary: number | null
    status: $Enums.OfferStatus | null
    validUntil: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OfferCountAggregateOutputType = {
    id: number
    companyId: number
    candidateName: number
    candidateEmail: number
    jobTitle: number
    country: number
    salary: number
    status: number
    validUntil: number
    details: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OfferAvgAggregateInputType = {
    salary?: true
  }

  export type OfferSumAggregateInputType = {
    salary?: true
  }

  export type OfferMinAggregateInputType = {
    id?: true
    companyId?: true
    candidateName?: true
    candidateEmail?: true
    jobTitle?: true
    country?: true
    salary?: true
    status?: true
    validUntil?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OfferMaxAggregateInputType = {
    id?: true
    companyId?: true
    candidateName?: true
    candidateEmail?: true
    jobTitle?: true
    country?: true
    salary?: true
    status?: true
    validUntil?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OfferCountAggregateInputType = {
    id?: true
    companyId?: true
    candidateName?: true
    candidateEmail?: true
    jobTitle?: true
    country?: true
    salary?: true
    status?: true
    validUntil?: true
    details?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OfferAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Offer to aggregate.
     */
    where?: OfferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Offers to fetch.
     */
    orderBy?: OfferOrderByWithRelationInput | OfferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OfferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Offers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Offers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Offers
    **/
    _count?: true | OfferCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OfferAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OfferSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OfferMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OfferMaxAggregateInputType
  }

  export type GetOfferAggregateType<T extends OfferAggregateArgs> = {
        [P in keyof T & keyof AggregateOffer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOffer[P]>
      : GetScalarType<T[P], AggregateOffer[P]>
  }




  export type OfferGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OfferWhereInput
    orderBy?: OfferOrderByWithAggregationInput | OfferOrderByWithAggregationInput[]
    by: OfferScalarFieldEnum[] | OfferScalarFieldEnum
    having?: OfferScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OfferCountAggregateInputType | true
    _avg?: OfferAvgAggregateInputType
    _sum?: OfferSumAggregateInputType
    _min?: OfferMinAggregateInputType
    _max?: OfferMaxAggregateInputType
  }

  export type OfferGroupByOutputType = {
    id: string
    companyId: string
    candidateName: string
    candidateEmail: string
    jobTitle: string
    country: $Enums.CountryCode
    salary: number
    status: $Enums.OfferStatus
    validUntil: Date | null
    details: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: OfferCountAggregateOutputType | null
    _avg: OfferAvgAggregateOutputType | null
    _sum: OfferSumAggregateOutputType | null
    _min: OfferMinAggregateOutputType | null
    _max: OfferMaxAggregateOutputType | null
  }

  type GetOfferGroupByPayload<T extends OfferGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OfferGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OfferGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OfferGroupByOutputType[P]>
            : GetScalarType<T[P], OfferGroupByOutputType[P]>
        }
      >
    >


  export type OfferSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    candidateName?: boolean
    candidateEmail?: boolean
    jobTitle?: boolean
    country?: boolean
    salary?: boolean
    status?: boolean
    validUntil?: boolean
    details?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    contract?: boolean | Offer$contractArgs<ExtArgs>
  }, ExtArgs["result"]["offer"]>

  export type OfferSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    candidateName?: boolean
    candidateEmail?: boolean
    jobTitle?: boolean
    country?: boolean
    salary?: boolean
    status?: boolean
    validUntil?: boolean
    details?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["offer"]>

  export type OfferSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    candidateName?: boolean
    candidateEmail?: boolean
    jobTitle?: boolean
    country?: boolean
    salary?: boolean
    status?: boolean
    validUntil?: boolean
    details?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["offer"]>

  export type OfferSelectScalar = {
    id?: boolean
    companyId?: boolean
    candidateName?: boolean
    candidateEmail?: boolean
    jobTitle?: boolean
    country?: boolean
    salary?: boolean
    status?: boolean
    validUntil?: boolean
    details?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OfferOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "companyId" | "candidateName" | "candidateEmail" | "jobTitle" | "country" | "salary" | "status" | "validUntil" | "details" | "createdAt" | "updatedAt", ExtArgs["result"]["offer"]>
  export type OfferInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    contract?: boolean | Offer$contractArgs<ExtArgs>
  }
  export type OfferIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }
  export type OfferIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }

  export type $OfferPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Offer"
    objects: {
      company: Prisma.$CompanyPayload<ExtArgs>
      contract: Prisma.$ContractPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      companyId: string
      candidateName: string
      candidateEmail: string
      jobTitle: string
      country: $Enums.CountryCode
      salary: number
      status: $Enums.OfferStatus
      validUntil: Date | null
      details: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["offer"]>
    composites: {}
  }

  type OfferGetPayload<S extends boolean | null | undefined | OfferDefaultArgs> = $Result.GetResult<Prisma.$OfferPayload, S>

  type OfferCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OfferFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OfferCountAggregateInputType | true
    }

  export interface OfferDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Offer'], meta: { name: 'Offer' } }
    /**
     * Find zero or one Offer that matches the filter.
     * @param {OfferFindUniqueArgs} args - Arguments to find a Offer
     * @example
     * // Get one Offer
     * const offer = await prisma.offer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OfferFindUniqueArgs>(args: SelectSubset<T, OfferFindUniqueArgs<ExtArgs>>): Prisma__OfferClient<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Offer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OfferFindUniqueOrThrowArgs} args - Arguments to find a Offer
     * @example
     * // Get one Offer
     * const offer = await prisma.offer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OfferFindUniqueOrThrowArgs>(args: SelectSubset<T, OfferFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OfferClient<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Offer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferFindFirstArgs} args - Arguments to find a Offer
     * @example
     * // Get one Offer
     * const offer = await prisma.offer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OfferFindFirstArgs>(args?: SelectSubset<T, OfferFindFirstArgs<ExtArgs>>): Prisma__OfferClient<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Offer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferFindFirstOrThrowArgs} args - Arguments to find a Offer
     * @example
     * // Get one Offer
     * const offer = await prisma.offer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OfferFindFirstOrThrowArgs>(args?: SelectSubset<T, OfferFindFirstOrThrowArgs<ExtArgs>>): Prisma__OfferClient<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Offers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Offers
     * const offers = await prisma.offer.findMany()
     * 
     * // Get first 10 Offers
     * const offers = await prisma.offer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const offerWithIdOnly = await prisma.offer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OfferFindManyArgs>(args?: SelectSubset<T, OfferFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Offer.
     * @param {OfferCreateArgs} args - Arguments to create a Offer.
     * @example
     * // Create one Offer
     * const Offer = await prisma.offer.create({
     *   data: {
     *     // ... data to create a Offer
     *   }
     * })
     * 
     */
    create<T extends OfferCreateArgs>(args: SelectSubset<T, OfferCreateArgs<ExtArgs>>): Prisma__OfferClient<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Offers.
     * @param {OfferCreateManyArgs} args - Arguments to create many Offers.
     * @example
     * // Create many Offers
     * const offer = await prisma.offer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OfferCreateManyArgs>(args?: SelectSubset<T, OfferCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Offers and returns the data saved in the database.
     * @param {OfferCreateManyAndReturnArgs} args - Arguments to create many Offers.
     * @example
     * // Create many Offers
     * const offer = await prisma.offer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Offers and only return the `id`
     * const offerWithIdOnly = await prisma.offer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OfferCreateManyAndReturnArgs>(args?: SelectSubset<T, OfferCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Offer.
     * @param {OfferDeleteArgs} args - Arguments to delete one Offer.
     * @example
     * // Delete one Offer
     * const Offer = await prisma.offer.delete({
     *   where: {
     *     // ... filter to delete one Offer
     *   }
     * })
     * 
     */
    delete<T extends OfferDeleteArgs>(args: SelectSubset<T, OfferDeleteArgs<ExtArgs>>): Prisma__OfferClient<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Offer.
     * @param {OfferUpdateArgs} args - Arguments to update one Offer.
     * @example
     * // Update one Offer
     * const offer = await prisma.offer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OfferUpdateArgs>(args: SelectSubset<T, OfferUpdateArgs<ExtArgs>>): Prisma__OfferClient<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Offers.
     * @param {OfferDeleteManyArgs} args - Arguments to filter Offers to delete.
     * @example
     * // Delete a few Offers
     * const { count } = await prisma.offer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OfferDeleteManyArgs>(args?: SelectSubset<T, OfferDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Offers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Offers
     * const offer = await prisma.offer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OfferUpdateManyArgs>(args: SelectSubset<T, OfferUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Offers and returns the data updated in the database.
     * @param {OfferUpdateManyAndReturnArgs} args - Arguments to update many Offers.
     * @example
     * // Update many Offers
     * const offer = await prisma.offer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Offers and only return the `id`
     * const offerWithIdOnly = await prisma.offer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OfferUpdateManyAndReturnArgs>(args: SelectSubset<T, OfferUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Offer.
     * @param {OfferUpsertArgs} args - Arguments to update or create a Offer.
     * @example
     * // Update or create a Offer
     * const offer = await prisma.offer.upsert({
     *   create: {
     *     // ... data to create a Offer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Offer we want to update
     *   }
     * })
     */
    upsert<T extends OfferUpsertArgs>(args: SelectSubset<T, OfferUpsertArgs<ExtArgs>>): Prisma__OfferClient<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Offers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferCountArgs} args - Arguments to filter Offers to count.
     * @example
     * // Count the number of Offers
     * const count = await prisma.offer.count({
     *   where: {
     *     // ... the filter for the Offers we want to count
     *   }
     * })
    **/
    count<T extends OfferCountArgs>(
      args?: Subset<T, OfferCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OfferCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Offer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OfferAggregateArgs>(args: Subset<T, OfferAggregateArgs>): Prisma.PrismaPromise<GetOfferAggregateType<T>>

    /**
     * Group by Offer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OfferGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OfferGroupByArgs['orderBy'] }
        : { orderBy?: OfferGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OfferGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOfferGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Offer model
   */
  readonly fields: OfferFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Offer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OfferClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    contract<T extends Offer$contractArgs<ExtArgs> = {}>(args?: Subset<T, Offer$contractArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Offer model
   */
  interface OfferFieldRefs {
    readonly id: FieldRef<"Offer", 'String'>
    readonly companyId: FieldRef<"Offer", 'String'>
    readonly candidateName: FieldRef<"Offer", 'String'>
    readonly candidateEmail: FieldRef<"Offer", 'String'>
    readonly jobTitle: FieldRef<"Offer", 'String'>
    readonly country: FieldRef<"Offer", 'CountryCode'>
    readonly salary: FieldRef<"Offer", 'Float'>
    readonly status: FieldRef<"Offer", 'OfferStatus'>
    readonly validUntil: FieldRef<"Offer", 'DateTime'>
    readonly details: FieldRef<"Offer", 'Json'>
    readonly createdAt: FieldRef<"Offer", 'DateTime'>
    readonly updatedAt: FieldRef<"Offer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Offer findUnique
   */
  export type OfferFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    /**
     * Filter, which Offer to fetch.
     */
    where: OfferWhereUniqueInput
  }

  /**
   * Offer findUniqueOrThrow
   */
  export type OfferFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    /**
     * Filter, which Offer to fetch.
     */
    where: OfferWhereUniqueInput
  }

  /**
   * Offer findFirst
   */
  export type OfferFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    /**
     * Filter, which Offer to fetch.
     */
    where?: OfferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Offers to fetch.
     */
    orderBy?: OfferOrderByWithRelationInput | OfferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Offers.
     */
    cursor?: OfferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Offers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Offers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Offers.
     */
    distinct?: OfferScalarFieldEnum | OfferScalarFieldEnum[]
  }

  /**
   * Offer findFirstOrThrow
   */
  export type OfferFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    /**
     * Filter, which Offer to fetch.
     */
    where?: OfferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Offers to fetch.
     */
    orderBy?: OfferOrderByWithRelationInput | OfferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Offers.
     */
    cursor?: OfferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Offers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Offers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Offers.
     */
    distinct?: OfferScalarFieldEnum | OfferScalarFieldEnum[]
  }

  /**
   * Offer findMany
   */
  export type OfferFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    /**
     * Filter, which Offers to fetch.
     */
    where?: OfferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Offers to fetch.
     */
    orderBy?: OfferOrderByWithRelationInput | OfferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Offers.
     */
    cursor?: OfferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Offers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Offers.
     */
    skip?: number
    distinct?: OfferScalarFieldEnum | OfferScalarFieldEnum[]
  }

  /**
   * Offer create
   */
  export type OfferCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    /**
     * The data needed to create a Offer.
     */
    data: XOR<OfferCreateInput, OfferUncheckedCreateInput>
  }

  /**
   * Offer createMany
   */
  export type OfferCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Offers.
     */
    data: OfferCreateManyInput | OfferCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Offer createManyAndReturn
   */
  export type OfferCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * The data used to create many Offers.
     */
    data: OfferCreateManyInput | OfferCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Offer update
   */
  export type OfferUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    /**
     * The data needed to update a Offer.
     */
    data: XOR<OfferUpdateInput, OfferUncheckedUpdateInput>
    /**
     * Choose, which Offer to update.
     */
    where: OfferWhereUniqueInput
  }

  /**
   * Offer updateMany
   */
  export type OfferUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Offers.
     */
    data: XOR<OfferUpdateManyMutationInput, OfferUncheckedUpdateManyInput>
    /**
     * Filter which Offers to update
     */
    where?: OfferWhereInput
    /**
     * Limit how many Offers to update.
     */
    limit?: number
  }

  /**
   * Offer updateManyAndReturn
   */
  export type OfferUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * The data used to update Offers.
     */
    data: XOR<OfferUpdateManyMutationInput, OfferUncheckedUpdateManyInput>
    /**
     * Filter which Offers to update
     */
    where?: OfferWhereInput
    /**
     * Limit how many Offers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Offer upsert
   */
  export type OfferUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    /**
     * The filter to search for the Offer to update in case it exists.
     */
    where: OfferWhereUniqueInput
    /**
     * In case the Offer found by the `where` argument doesn't exist, create a new Offer with this data.
     */
    create: XOR<OfferCreateInput, OfferUncheckedCreateInput>
    /**
     * In case the Offer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OfferUpdateInput, OfferUncheckedUpdateInput>
  }

  /**
   * Offer delete
   */
  export type OfferDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    /**
     * Filter which Offer to delete.
     */
    where: OfferWhereUniqueInput
  }

  /**
   * Offer deleteMany
   */
  export type OfferDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Offers to delete
     */
    where?: OfferWhereInput
    /**
     * Limit how many Offers to delete.
     */
    limit?: number
  }

  /**
   * Offer.contract
   */
  export type Offer$contractArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    where?: ContractWhereInput
  }

  /**
   * Offer without action
   */
  export type OfferDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
  }


  /**
   * Model Contract
   */

  export type AggregateContract = {
    _count: ContractCountAggregateOutputType | null
    _min: ContractMinAggregateOutputType | null
    _max: ContractMaxAggregateOutputType | null
  }

  export type ContractMinAggregateOutputType = {
    id: string | null
    companyId: string | null
    offerId: string | null
    employeeId: string | null
    status: $Enums.ContractStatus | null
    content: string | null
    signedAt: Date | null
    validFrom: Date | null
    validUntil: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContractMaxAggregateOutputType = {
    id: string | null
    companyId: string | null
    offerId: string | null
    employeeId: string | null
    status: $Enums.ContractStatus | null
    content: string | null
    signedAt: Date | null
    validFrom: Date | null
    validUntil: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContractCountAggregateOutputType = {
    id: number
    companyId: number
    offerId: number
    employeeId: number
    status: number
    content: number
    legalTerms: number
    signedAt: number
    validFrom: number
    validUntil: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ContractMinAggregateInputType = {
    id?: true
    companyId?: true
    offerId?: true
    employeeId?: true
    status?: true
    content?: true
    signedAt?: true
    validFrom?: true
    validUntil?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContractMaxAggregateInputType = {
    id?: true
    companyId?: true
    offerId?: true
    employeeId?: true
    status?: true
    content?: true
    signedAt?: true
    validFrom?: true
    validUntil?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContractCountAggregateInputType = {
    id?: true
    companyId?: true
    offerId?: true
    employeeId?: true
    status?: true
    content?: true
    legalTerms?: true
    signedAt?: true
    validFrom?: true
    validUntil?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ContractAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contract to aggregate.
     */
    where?: ContractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contracts to fetch.
     */
    orderBy?: ContractOrderByWithRelationInput | ContractOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contracts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contracts
    **/
    _count?: true | ContractCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContractMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContractMaxAggregateInputType
  }

  export type GetContractAggregateType<T extends ContractAggregateArgs> = {
        [P in keyof T & keyof AggregateContract]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContract[P]>
      : GetScalarType<T[P], AggregateContract[P]>
  }




  export type ContractGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContractWhereInput
    orderBy?: ContractOrderByWithAggregationInput | ContractOrderByWithAggregationInput[]
    by: ContractScalarFieldEnum[] | ContractScalarFieldEnum
    having?: ContractScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContractCountAggregateInputType | true
    _min?: ContractMinAggregateInputType
    _max?: ContractMaxAggregateInputType
  }

  export type ContractGroupByOutputType = {
    id: string
    companyId: string
    offerId: string | null
    employeeId: string | null
    status: $Enums.ContractStatus
    content: string | null
    legalTerms: JsonValue | null
    signedAt: Date | null
    validFrom: Date | null
    validUntil: Date | null
    createdAt: Date
    updatedAt: Date
    _count: ContractCountAggregateOutputType | null
    _min: ContractMinAggregateOutputType | null
    _max: ContractMaxAggregateOutputType | null
  }

  type GetContractGroupByPayload<T extends ContractGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContractGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContractGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContractGroupByOutputType[P]>
            : GetScalarType<T[P], ContractGroupByOutputType[P]>
        }
      >
    >


  export type ContractSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    offerId?: boolean
    employeeId?: boolean
    status?: boolean
    content?: boolean
    legalTerms?: boolean
    signedAt?: boolean
    validFrom?: boolean
    validUntil?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    offer?: boolean | Contract$offerArgs<ExtArgs>
    employee?: boolean | Contract$employeeArgs<ExtArgs>
  }, ExtArgs["result"]["contract"]>

  export type ContractSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    offerId?: boolean
    employeeId?: boolean
    status?: boolean
    content?: boolean
    legalTerms?: boolean
    signedAt?: boolean
    validFrom?: boolean
    validUntil?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    offer?: boolean | Contract$offerArgs<ExtArgs>
    employee?: boolean | Contract$employeeArgs<ExtArgs>
  }, ExtArgs["result"]["contract"]>

  export type ContractSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    offerId?: boolean
    employeeId?: boolean
    status?: boolean
    content?: boolean
    legalTerms?: boolean
    signedAt?: boolean
    validFrom?: boolean
    validUntil?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    offer?: boolean | Contract$offerArgs<ExtArgs>
    employee?: boolean | Contract$employeeArgs<ExtArgs>
  }, ExtArgs["result"]["contract"]>

  export type ContractSelectScalar = {
    id?: boolean
    companyId?: boolean
    offerId?: boolean
    employeeId?: boolean
    status?: boolean
    content?: boolean
    legalTerms?: boolean
    signedAt?: boolean
    validFrom?: boolean
    validUntil?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ContractOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "companyId" | "offerId" | "employeeId" | "status" | "content" | "legalTerms" | "signedAt" | "validFrom" | "validUntil" | "createdAt" | "updatedAt", ExtArgs["result"]["contract"]>
  export type ContractInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    offer?: boolean | Contract$offerArgs<ExtArgs>
    employee?: boolean | Contract$employeeArgs<ExtArgs>
  }
  export type ContractIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    offer?: boolean | Contract$offerArgs<ExtArgs>
    employee?: boolean | Contract$employeeArgs<ExtArgs>
  }
  export type ContractIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    offer?: boolean | Contract$offerArgs<ExtArgs>
    employee?: boolean | Contract$employeeArgs<ExtArgs>
  }

  export type $ContractPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Contract"
    objects: {
      company: Prisma.$CompanyPayload<ExtArgs>
      offer: Prisma.$OfferPayload<ExtArgs> | null
      employee: Prisma.$EmployeePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      companyId: string
      offerId: string | null
      employeeId: string | null
      status: $Enums.ContractStatus
      content: string | null
      legalTerms: Prisma.JsonValue | null
      signedAt: Date | null
      validFrom: Date | null
      validUntil: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["contract"]>
    composites: {}
  }

  type ContractGetPayload<S extends boolean | null | undefined | ContractDefaultArgs> = $Result.GetResult<Prisma.$ContractPayload, S>

  type ContractCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContractFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContractCountAggregateInputType | true
    }

  export interface ContractDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Contract'], meta: { name: 'Contract' } }
    /**
     * Find zero or one Contract that matches the filter.
     * @param {ContractFindUniqueArgs} args - Arguments to find a Contract
     * @example
     * // Get one Contract
     * const contract = await prisma.contract.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContractFindUniqueArgs>(args: SelectSubset<T, ContractFindUniqueArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Contract that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContractFindUniqueOrThrowArgs} args - Arguments to find a Contract
     * @example
     * // Get one Contract
     * const contract = await prisma.contract.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContractFindUniqueOrThrowArgs>(args: SelectSubset<T, ContractFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contract that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractFindFirstArgs} args - Arguments to find a Contract
     * @example
     * // Get one Contract
     * const contract = await prisma.contract.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContractFindFirstArgs>(args?: SelectSubset<T, ContractFindFirstArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contract that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractFindFirstOrThrowArgs} args - Arguments to find a Contract
     * @example
     * // Get one Contract
     * const contract = await prisma.contract.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContractFindFirstOrThrowArgs>(args?: SelectSubset<T, ContractFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Contracts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contracts
     * const contracts = await prisma.contract.findMany()
     * 
     * // Get first 10 Contracts
     * const contracts = await prisma.contract.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contractWithIdOnly = await prisma.contract.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContractFindManyArgs>(args?: SelectSubset<T, ContractFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Contract.
     * @param {ContractCreateArgs} args - Arguments to create a Contract.
     * @example
     * // Create one Contract
     * const Contract = await prisma.contract.create({
     *   data: {
     *     // ... data to create a Contract
     *   }
     * })
     * 
     */
    create<T extends ContractCreateArgs>(args: SelectSubset<T, ContractCreateArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Contracts.
     * @param {ContractCreateManyArgs} args - Arguments to create many Contracts.
     * @example
     * // Create many Contracts
     * const contract = await prisma.contract.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContractCreateManyArgs>(args?: SelectSubset<T, ContractCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Contracts and returns the data saved in the database.
     * @param {ContractCreateManyAndReturnArgs} args - Arguments to create many Contracts.
     * @example
     * // Create many Contracts
     * const contract = await prisma.contract.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Contracts and only return the `id`
     * const contractWithIdOnly = await prisma.contract.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContractCreateManyAndReturnArgs>(args?: SelectSubset<T, ContractCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Contract.
     * @param {ContractDeleteArgs} args - Arguments to delete one Contract.
     * @example
     * // Delete one Contract
     * const Contract = await prisma.contract.delete({
     *   where: {
     *     // ... filter to delete one Contract
     *   }
     * })
     * 
     */
    delete<T extends ContractDeleteArgs>(args: SelectSubset<T, ContractDeleteArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Contract.
     * @param {ContractUpdateArgs} args - Arguments to update one Contract.
     * @example
     * // Update one Contract
     * const contract = await prisma.contract.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContractUpdateArgs>(args: SelectSubset<T, ContractUpdateArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Contracts.
     * @param {ContractDeleteManyArgs} args - Arguments to filter Contracts to delete.
     * @example
     * // Delete a few Contracts
     * const { count } = await prisma.contract.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContractDeleteManyArgs>(args?: SelectSubset<T, ContractDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contracts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contracts
     * const contract = await prisma.contract.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContractUpdateManyArgs>(args: SelectSubset<T, ContractUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contracts and returns the data updated in the database.
     * @param {ContractUpdateManyAndReturnArgs} args - Arguments to update many Contracts.
     * @example
     * // Update many Contracts
     * const contract = await prisma.contract.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Contracts and only return the `id`
     * const contractWithIdOnly = await prisma.contract.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ContractUpdateManyAndReturnArgs>(args: SelectSubset<T, ContractUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Contract.
     * @param {ContractUpsertArgs} args - Arguments to update or create a Contract.
     * @example
     * // Update or create a Contract
     * const contract = await prisma.contract.upsert({
     *   create: {
     *     // ... data to create a Contract
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contract we want to update
     *   }
     * })
     */
    upsert<T extends ContractUpsertArgs>(args: SelectSubset<T, ContractUpsertArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Contracts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractCountArgs} args - Arguments to filter Contracts to count.
     * @example
     * // Count the number of Contracts
     * const count = await prisma.contract.count({
     *   where: {
     *     // ... the filter for the Contracts we want to count
     *   }
     * })
    **/
    count<T extends ContractCountArgs>(
      args?: Subset<T, ContractCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContractCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contract.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContractAggregateArgs>(args: Subset<T, ContractAggregateArgs>): Prisma.PrismaPromise<GetContractAggregateType<T>>

    /**
     * Group by Contract.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContractGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContractGroupByArgs['orderBy'] }
        : { orderBy?: ContractGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContractGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContractGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Contract model
   */
  readonly fields: ContractFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Contract.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContractClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    offer<T extends Contract$offerArgs<ExtArgs> = {}>(args?: Subset<T, Contract$offerArgs<ExtArgs>>): Prisma__OfferClient<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    employee<T extends Contract$employeeArgs<ExtArgs> = {}>(args?: Subset<T, Contract$employeeArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Contract model
   */
  interface ContractFieldRefs {
    readonly id: FieldRef<"Contract", 'String'>
    readonly companyId: FieldRef<"Contract", 'String'>
    readonly offerId: FieldRef<"Contract", 'String'>
    readonly employeeId: FieldRef<"Contract", 'String'>
    readonly status: FieldRef<"Contract", 'ContractStatus'>
    readonly content: FieldRef<"Contract", 'String'>
    readonly legalTerms: FieldRef<"Contract", 'Json'>
    readonly signedAt: FieldRef<"Contract", 'DateTime'>
    readonly validFrom: FieldRef<"Contract", 'DateTime'>
    readonly validUntil: FieldRef<"Contract", 'DateTime'>
    readonly createdAt: FieldRef<"Contract", 'DateTime'>
    readonly updatedAt: FieldRef<"Contract", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Contract findUnique
   */
  export type ContractFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * Filter, which Contract to fetch.
     */
    where: ContractWhereUniqueInput
  }

  /**
   * Contract findUniqueOrThrow
   */
  export type ContractFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * Filter, which Contract to fetch.
     */
    where: ContractWhereUniqueInput
  }

  /**
   * Contract findFirst
   */
  export type ContractFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * Filter, which Contract to fetch.
     */
    where?: ContractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contracts to fetch.
     */
    orderBy?: ContractOrderByWithRelationInput | ContractOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contracts.
     */
    cursor?: ContractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contracts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contracts.
     */
    distinct?: ContractScalarFieldEnum | ContractScalarFieldEnum[]
  }

  /**
   * Contract findFirstOrThrow
   */
  export type ContractFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * Filter, which Contract to fetch.
     */
    where?: ContractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contracts to fetch.
     */
    orderBy?: ContractOrderByWithRelationInput | ContractOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contracts.
     */
    cursor?: ContractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contracts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contracts.
     */
    distinct?: ContractScalarFieldEnum | ContractScalarFieldEnum[]
  }

  /**
   * Contract findMany
   */
  export type ContractFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * Filter, which Contracts to fetch.
     */
    where?: ContractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contracts to fetch.
     */
    orderBy?: ContractOrderByWithRelationInput | ContractOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contracts.
     */
    cursor?: ContractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contracts.
     */
    skip?: number
    distinct?: ContractScalarFieldEnum | ContractScalarFieldEnum[]
  }

  /**
   * Contract create
   */
  export type ContractCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * The data needed to create a Contract.
     */
    data: XOR<ContractCreateInput, ContractUncheckedCreateInput>
  }

  /**
   * Contract createMany
   */
  export type ContractCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Contracts.
     */
    data: ContractCreateManyInput | ContractCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Contract createManyAndReturn
   */
  export type ContractCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * The data used to create many Contracts.
     */
    data: ContractCreateManyInput | ContractCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Contract update
   */
  export type ContractUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * The data needed to update a Contract.
     */
    data: XOR<ContractUpdateInput, ContractUncheckedUpdateInput>
    /**
     * Choose, which Contract to update.
     */
    where: ContractWhereUniqueInput
  }

  /**
   * Contract updateMany
   */
  export type ContractUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Contracts.
     */
    data: XOR<ContractUpdateManyMutationInput, ContractUncheckedUpdateManyInput>
    /**
     * Filter which Contracts to update
     */
    where?: ContractWhereInput
    /**
     * Limit how many Contracts to update.
     */
    limit?: number
  }

  /**
   * Contract updateManyAndReturn
   */
  export type ContractUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * The data used to update Contracts.
     */
    data: XOR<ContractUpdateManyMutationInput, ContractUncheckedUpdateManyInput>
    /**
     * Filter which Contracts to update
     */
    where?: ContractWhereInput
    /**
     * Limit how many Contracts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Contract upsert
   */
  export type ContractUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * The filter to search for the Contract to update in case it exists.
     */
    where: ContractWhereUniqueInput
    /**
     * In case the Contract found by the `where` argument doesn't exist, create a new Contract with this data.
     */
    create: XOR<ContractCreateInput, ContractUncheckedCreateInput>
    /**
     * In case the Contract was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContractUpdateInput, ContractUncheckedUpdateInput>
  }

  /**
   * Contract delete
   */
  export type ContractDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * Filter which Contract to delete.
     */
    where: ContractWhereUniqueInput
  }

  /**
   * Contract deleteMany
   */
  export type ContractDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contracts to delete
     */
    where?: ContractWhereInput
    /**
     * Limit how many Contracts to delete.
     */
    limit?: number
  }

  /**
   * Contract.offer
   */
  export type Contract$offerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    where?: OfferWhereInput
  }

  /**
   * Contract.employee
   */
  export type Contract$employeeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    where?: EmployeeWhereInput
  }

  /**
   * Contract without action
   */
  export type ContractDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
  }


  /**
   * Model Document
   */

  export type AggregateDocument = {
    _count: DocumentCountAggregateOutputType | null
    _min: DocumentMinAggregateOutputType | null
    _max: DocumentMaxAggregateOutputType | null
  }

  export type DocumentMinAggregateOutputType = {
    id: string | null
    name: string | null
    type: string | null
    url: string | null
    status: $Enums.DocumentStatus | null
    employeeId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DocumentMaxAggregateOutputType = {
    id: string | null
    name: string | null
    type: string | null
    url: string | null
    status: $Enums.DocumentStatus | null
    employeeId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DocumentCountAggregateOutputType = {
    id: number
    name: number
    type: number
    url: number
    status: number
    employeeId: number
    meta: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DocumentMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
    url?: true
    status?: true
    employeeId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DocumentMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
    url?: true
    status?: true
    employeeId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DocumentCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    url?: true
    status?: true
    employeeId?: true
    meta?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DocumentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Document to aggregate.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Documents
    **/
    _count?: true | DocumentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DocumentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DocumentMaxAggregateInputType
  }

  export type GetDocumentAggregateType<T extends DocumentAggregateArgs> = {
        [P in keyof T & keyof AggregateDocument]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocument[P]>
      : GetScalarType<T[P], AggregateDocument[P]>
  }




  export type DocumentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentWhereInput
    orderBy?: DocumentOrderByWithAggregationInput | DocumentOrderByWithAggregationInput[]
    by: DocumentScalarFieldEnum[] | DocumentScalarFieldEnum
    having?: DocumentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DocumentCountAggregateInputType | true
    _min?: DocumentMinAggregateInputType
    _max?: DocumentMaxAggregateInputType
  }

  export type DocumentGroupByOutputType = {
    id: string
    name: string
    type: string
    url: string | null
    status: $Enums.DocumentStatus
    employeeId: string
    meta: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: DocumentCountAggregateOutputType | null
    _min: DocumentMinAggregateOutputType | null
    _max: DocumentMaxAggregateOutputType | null
  }

  type GetDocumentGroupByPayload<T extends DocumentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DocumentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DocumentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DocumentGroupByOutputType[P]>
            : GetScalarType<T[P], DocumentGroupByOutputType[P]>
        }
      >
    >


  export type DocumentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    url?: boolean
    status?: boolean
    employeeId?: boolean
    meta?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["document"]>

  export type DocumentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    url?: boolean
    status?: boolean
    employeeId?: boolean
    meta?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["document"]>

  export type DocumentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    url?: boolean
    status?: boolean
    employeeId?: boolean
    meta?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["document"]>

  export type DocumentSelectScalar = {
    id?: boolean
    name?: boolean
    type?: boolean
    url?: boolean
    status?: boolean
    employeeId?: boolean
    meta?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DocumentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "type" | "url" | "status" | "employeeId" | "meta" | "createdAt" | "updatedAt", ExtArgs["result"]["document"]>
  export type DocumentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }
  export type DocumentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }
  export type DocumentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }

  export type $DocumentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Document"
    objects: {
      employee: Prisma.$EmployeePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      type: string
      url: string | null
      status: $Enums.DocumentStatus
      employeeId: string
      meta: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["document"]>
    composites: {}
  }

  type DocumentGetPayload<S extends boolean | null | undefined | DocumentDefaultArgs> = $Result.GetResult<Prisma.$DocumentPayload, S>

  type DocumentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DocumentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DocumentCountAggregateInputType | true
    }

  export interface DocumentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Document'], meta: { name: 'Document' } }
    /**
     * Find zero or one Document that matches the filter.
     * @param {DocumentFindUniqueArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DocumentFindUniqueArgs>(args: SelectSubset<T, DocumentFindUniqueArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Document that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DocumentFindUniqueOrThrowArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DocumentFindUniqueOrThrowArgs>(args: SelectSubset<T, DocumentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Document that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindFirstArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DocumentFindFirstArgs>(args?: SelectSubset<T, DocumentFindFirstArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Document that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindFirstOrThrowArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DocumentFindFirstOrThrowArgs>(args?: SelectSubset<T, DocumentFindFirstOrThrowArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Documents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Documents
     * const documents = await prisma.document.findMany()
     * 
     * // Get first 10 Documents
     * const documents = await prisma.document.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const documentWithIdOnly = await prisma.document.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DocumentFindManyArgs>(args?: SelectSubset<T, DocumentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Document.
     * @param {DocumentCreateArgs} args - Arguments to create a Document.
     * @example
     * // Create one Document
     * const Document = await prisma.document.create({
     *   data: {
     *     // ... data to create a Document
     *   }
     * })
     * 
     */
    create<T extends DocumentCreateArgs>(args: SelectSubset<T, DocumentCreateArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Documents.
     * @param {DocumentCreateManyArgs} args - Arguments to create many Documents.
     * @example
     * // Create many Documents
     * const document = await prisma.document.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DocumentCreateManyArgs>(args?: SelectSubset<T, DocumentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Documents and returns the data saved in the database.
     * @param {DocumentCreateManyAndReturnArgs} args - Arguments to create many Documents.
     * @example
     * // Create many Documents
     * const document = await prisma.document.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Documents and only return the `id`
     * const documentWithIdOnly = await prisma.document.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DocumentCreateManyAndReturnArgs>(args?: SelectSubset<T, DocumentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Document.
     * @param {DocumentDeleteArgs} args - Arguments to delete one Document.
     * @example
     * // Delete one Document
     * const Document = await prisma.document.delete({
     *   where: {
     *     // ... filter to delete one Document
     *   }
     * })
     * 
     */
    delete<T extends DocumentDeleteArgs>(args: SelectSubset<T, DocumentDeleteArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Document.
     * @param {DocumentUpdateArgs} args - Arguments to update one Document.
     * @example
     * // Update one Document
     * const document = await prisma.document.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DocumentUpdateArgs>(args: SelectSubset<T, DocumentUpdateArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Documents.
     * @param {DocumentDeleteManyArgs} args - Arguments to filter Documents to delete.
     * @example
     * // Delete a few Documents
     * const { count } = await prisma.document.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DocumentDeleteManyArgs>(args?: SelectSubset<T, DocumentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Documents
     * const document = await prisma.document.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DocumentUpdateManyArgs>(args: SelectSubset<T, DocumentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Documents and returns the data updated in the database.
     * @param {DocumentUpdateManyAndReturnArgs} args - Arguments to update many Documents.
     * @example
     * // Update many Documents
     * const document = await prisma.document.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Documents and only return the `id`
     * const documentWithIdOnly = await prisma.document.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DocumentUpdateManyAndReturnArgs>(args: SelectSubset<T, DocumentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Document.
     * @param {DocumentUpsertArgs} args - Arguments to update or create a Document.
     * @example
     * // Update or create a Document
     * const document = await prisma.document.upsert({
     *   create: {
     *     // ... data to create a Document
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Document we want to update
     *   }
     * })
     */
    upsert<T extends DocumentUpsertArgs>(args: SelectSubset<T, DocumentUpsertArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentCountArgs} args - Arguments to filter Documents to count.
     * @example
     * // Count the number of Documents
     * const count = await prisma.document.count({
     *   where: {
     *     // ... the filter for the Documents we want to count
     *   }
     * })
    **/
    count<T extends DocumentCountArgs>(
      args?: Subset<T, DocumentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DocumentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Document.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DocumentAggregateArgs>(args: Subset<T, DocumentAggregateArgs>): Prisma.PrismaPromise<GetDocumentAggregateType<T>>

    /**
     * Group by Document.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DocumentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DocumentGroupByArgs['orderBy'] }
        : { orderBy?: DocumentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DocumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Document model
   */
  readonly fields: DocumentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Document.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DocumentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employee<T extends EmployeeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmployeeDefaultArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Document model
   */
  interface DocumentFieldRefs {
    readonly id: FieldRef<"Document", 'String'>
    readonly name: FieldRef<"Document", 'String'>
    readonly type: FieldRef<"Document", 'String'>
    readonly url: FieldRef<"Document", 'String'>
    readonly status: FieldRef<"Document", 'DocumentStatus'>
    readonly employeeId: FieldRef<"Document", 'String'>
    readonly meta: FieldRef<"Document", 'Json'>
    readonly createdAt: FieldRef<"Document", 'DateTime'>
    readonly updatedAt: FieldRef<"Document", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Document findUnique
   */
  export type DocumentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document findUniqueOrThrow
   */
  export type DocumentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document findFirst
   */
  export type DocumentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Documents.
     */
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document findFirstOrThrow
   */
  export type DocumentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Documents.
     */
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document findMany
   */
  export type DocumentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Documents to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document create
   */
  export type DocumentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The data needed to create a Document.
     */
    data: XOR<DocumentCreateInput, DocumentUncheckedCreateInput>
  }

  /**
   * Document createMany
   */
  export type DocumentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Documents.
     */
    data: DocumentCreateManyInput | DocumentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Document createManyAndReturn
   */
  export type DocumentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * The data used to create many Documents.
     */
    data: DocumentCreateManyInput | DocumentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Document update
   */
  export type DocumentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The data needed to update a Document.
     */
    data: XOR<DocumentUpdateInput, DocumentUncheckedUpdateInput>
    /**
     * Choose, which Document to update.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document updateMany
   */
  export type DocumentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Documents.
     */
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyInput>
    /**
     * Filter which Documents to update
     */
    where?: DocumentWhereInput
    /**
     * Limit how many Documents to update.
     */
    limit?: number
  }

  /**
   * Document updateManyAndReturn
   */
  export type DocumentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * The data used to update Documents.
     */
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyInput>
    /**
     * Filter which Documents to update
     */
    where?: DocumentWhereInput
    /**
     * Limit how many Documents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Document upsert
   */
  export type DocumentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The filter to search for the Document to update in case it exists.
     */
    where: DocumentWhereUniqueInput
    /**
     * In case the Document found by the `where` argument doesn't exist, create a new Document with this data.
     */
    create: XOR<DocumentCreateInput, DocumentUncheckedCreateInput>
    /**
     * In case the Document was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DocumentUpdateInput, DocumentUncheckedUpdateInput>
  }

  /**
   * Document delete
   */
  export type DocumentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter which Document to delete.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document deleteMany
   */
  export type DocumentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Documents to delete
     */
    where?: DocumentWhereInput
    /**
     * Limit how many Documents to delete.
     */
    limit?: number
  }

  /**
   * Document without action
   */
  export type DocumentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CompanyScalarFieldEnum: {
    id: 'id',
    name: 'name',
    legalName: 'legalName',
    hqCountry: 'hqCountry',
    taxId: 'taxId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    passwordHash: 'passwordHash',
    firstName: 'firstName',
    lastName: 'lastName',
    role: 'role',
    companyId: 'companyId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const EmployeeScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    workEmail: 'workEmail',
    dateOfJoin: 'dateOfJoin',
    status: 'status',
    companyId: 'companyId',
    country: 'country',
    baseSalary: 'baseSalary',
    managerId: 'managerId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EmployeeScalarFieldEnum = (typeof EmployeeScalarFieldEnum)[keyof typeof EmployeeScalarFieldEnum]


  export const AuditLogScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    action: 'action',
    resource: 'resource',
    resourceId: 'resourceId',
    payload: 'payload',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    createdAt: 'createdAt'
  };

  export type AuditLogScalarFieldEnum = (typeof AuditLogScalarFieldEnum)[keyof typeof AuditLogScalarFieldEnum]


  export const PayrollScalarFieldEnum: {
    id: 'id',
    companyId: 'companyId',
    month: 'month',
    year: 'year',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PayrollScalarFieldEnum = (typeof PayrollScalarFieldEnum)[keyof typeof PayrollScalarFieldEnum]


  export const PayrollItemScalarFieldEnum: {
    id: 'id',
    payrollId: 'payrollId',
    employeeId: 'employeeId',
    grossSalary: 'grossSalary',
    netSalary: 'netSalary',
    totalDeductions: 'totalDeductions',
    totalContributions: 'totalContributions',
    details: 'details',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PayrollItemScalarFieldEnum = (typeof PayrollItemScalarFieldEnum)[keyof typeof PayrollItemScalarFieldEnum]


  export const OfferScalarFieldEnum: {
    id: 'id',
    companyId: 'companyId',
    candidateName: 'candidateName',
    candidateEmail: 'candidateEmail',
    jobTitle: 'jobTitle',
    country: 'country',
    salary: 'salary',
    status: 'status',
    validUntil: 'validUntil',
    details: 'details',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OfferScalarFieldEnum = (typeof OfferScalarFieldEnum)[keyof typeof OfferScalarFieldEnum]


  export const ContractScalarFieldEnum: {
    id: 'id',
    companyId: 'companyId',
    offerId: 'offerId',
    employeeId: 'employeeId',
    status: 'status',
    content: 'content',
    legalTerms: 'legalTerms',
    signedAt: 'signedAt',
    validFrom: 'validFrom',
    validUntil: 'validUntil',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ContractScalarFieldEnum = (typeof ContractScalarFieldEnum)[keyof typeof ContractScalarFieldEnum]


  export const DocumentScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type',
    url: 'url',
    status: 'status',
    employeeId: 'employeeId',
    meta: 'meta',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DocumentScalarFieldEnum = (typeof DocumentScalarFieldEnum)[keyof typeof DocumentScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'CountryCode'
   */
  export type EnumCountryCodeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CountryCode'>
    


  /**
   * Reference to a field of type 'CountryCode[]'
   */
  export type ListEnumCountryCodeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CountryCode[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'EmployeeStatus'
   */
  export type EnumEmployeeStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EmployeeStatus'>
    


  /**
   * Reference to a field of type 'EmployeeStatus[]'
   */
  export type ListEnumEmployeeStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EmployeeStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'PayrollStatus'
   */
  export type EnumPayrollStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PayrollStatus'>
    


  /**
   * Reference to a field of type 'PayrollStatus[]'
   */
  export type ListEnumPayrollStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PayrollStatus[]'>
    


  /**
   * Reference to a field of type 'PayrollItemStatus'
   */
  export type EnumPayrollItemStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PayrollItemStatus'>
    


  /**
   * Reference to a field of type 'PayrollItemStatus[]'
   */
  export type ListEnumPayrollItemStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PayrollItemStatus[]'>
    


  /**
   * Reference to a field of type 'OfferStatus'
   */
  export type EnumOfferStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OfferStatus'>
    


  /**
   * Reference to a field of type 'OfferStatus[]'
   */
  export type ListEnumOfferStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OfferStatus[]'>
    


  /**
   * Reference to a field of type 'ContractStatus'
   */
  export type EnumContractStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ContractStatus'>
    


  /**
   * Reference to a field of type 'ContractStatus[]'
   */
  export type ListEnumContractStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ContractStatus[]'>
    


  /**
   * Reference to a field of type 'DocumentStatus'
   */
  export type EnumDocumentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DocumentStatus'>
    


  /**
   * Reference to a field of type 'DocumentStatus[]'
   */
  export type ListEnumDocumentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DocumentStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type CompanyWhereInput = {
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    id?: StringFilter<"Company"> | string
    name?: StringFilter<"Company"> | string
    legalName?: StringNullableFilter<"Company"> | string | null
    hqCountry?: EnumCountryCodeFilter<"Company"> | $Enums.CountryCode
    taxId?: StringNullableFilter<"Company"> | string | null
    createdAt?: DateTimeFilter<"Company"> | Date | string
    updatedAt?: DateTimeFilter<"Company"> | Date | string
    users?: UserListRelationFilter
    employees?: EmployeeListRelationFilter
    payrolls?: PayrollListRelationFilter
    offers?: OfferListRelationFilter
    contracts?: ContractListRelationFilter
  }

  export type CompanyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    legalName?: SortOrderInput | SortOrder
    hqCountry?: SortOrder
    taxId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    users?: UserOrderByRelationAggregateInput
    employees?: EmployeeOrderByRelationAggregateInput
    payrolls?: PayrollOrderByRelationAggregateInput
    offers?: OfferOrderByRelationAggregateInput
    contracts?: ContractOrderByRelationAggregateInput
  }

  export type CompanyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    name?: StringFilter<"Company"> | string
    legalName?: StringNullableFilter<"Company"> | string | null
    hqCountry?: EnumCountryCodeFilter<"Company"> | $Enums.CountryCode
    taxId?: StringNullableFilter<"Company"> | string | null
    createdAt?: DateTimeFilter<"Company"> | Date | string
    updatedAt?: DateTimeFilter<"Company"> | Date | string
    users?: UserListRelationFilter
    employees?: EmployeeListRelationFilter
    payrolls?: PayrollListRelationFilter
    offers?: OfferListRelationFilter
    contracts?: ContractListRelationFilter
  }, "id">

  export type CompanyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    legalName?: SortOrderInput | SortOrder
    hqCountry?: SortOrder
    taxId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CompanyCountOrderByAggregateInput
    _max?: CompanyMaxOrderByAggregateInput
    _min?: CompanyMinOrderByAggregateInput
  }

  export type CompanyScalarWhereWithAggregatesInput = {
    AND?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    OR?: CompanyScalarWhereWithAggregatesInput[]
    NOT?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Company"> | string
    name?: StringWithAggregatesFilter<"Company"> | string
    legalName?: StringNullableWithAggregatesFilter<"Company"> | string | null
    hqCountry?: EnumCountryCodeWithAggregatesFilter<"Company"> | $Enums.CountryCode
    taxId?: StringNullableWithAggregatesFilter<"Company"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Company"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Company"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    companyId?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    company?: XOR<CompanyNullableScalarRelationFilter, CompanyWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    role?: SortOrder
    companyId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    company?: CompanyOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    passwordHash?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    companyId?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    company?: XOR<CompanyNullableScalarRelationFilter, CompanyWhereInput> | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    role?: SortOrder
    companyId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    companyId?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type EmployeeWhereInput = {
    AND?: EmployeeWhereInput | EmployeeWhereInput[]
    OR?: EmployeeWhereInput[]
    NOT?: EmployeeWhereInput | EmployeeWhereInput[]
    id?: StringFilter<"Employee"> | string
    firstName?: StringFilter<"Employee"> | string
    lastName?: StringFilter<"Employee"> | string
    email?: StringFilter<"Employee"> | string
    workEmail?: StringNullableFilter<"Employee"> | string | null
    dateOfJoin?: DateTimeNullableFilter<"Employee"> | Date | string | null
    status?: EnumEmployeeStatusFilter<"Employee"> | $Enums.EmployeeStatus
    companyId?: StringFilter<"Employee"> | string
    country?: EnumCountryCodeFilter<"Employee"> | $Enums.CountryCode
    baseSalary?: FloatFilter<"Employee"> | number
    managerId?: StringNullableFilter<"Employee"> | string | null
    createdAt?: DateTimeFilter<"Employee"> | Date | string
    updatedAt?: DateTimeFilter<"Employee"> | Date | string
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    manager?: XOR<EmployeeNullableScalarRelationFilter, EmployeeWhereInput> | null
    directReports?: EmployeeListRelationFilter
    payrollItems?: PayrollItemListRelationFilter
    contract?: XOR<ContractNullableScalarRelationFilter, ContractWhereInput> | null
    documents?: DocumentListRelationFilter
  }

  export type EmployeeOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    workEmail?: SortOrderInput | SortOrder
    dateOfJoin?: SortOrderInput | SortOrder
    status?: SortOrder
    companyId?: SortOrder
    country?: SortOrder
    baseSalary?: SortOrder
    managerId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    company?: CompanyOrderByWithRelationInput
    manager?: EmployeeOrderByWithRelationInput
    directReports?: EmployeeOrderByRelationAggregateInput
    payrollItems?: PayrollItemOrderByRelationAggregateInput
    contract?: ContractOrderByWithRelationInput
    documents?: DocumentOrderByRelationAggregateInput
  }

  export type EmployeeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: EmployeeWhereInput | EmployeeWhereInput[]
    OR?: EmployeeWhereInput[]
    NOT?: EmployeeWhereInput | EmployeeWhereInput[]
    firstName?: StringFilter<"Employee"> | string
    lastName?: StringFilter<"Employee"> | string
    workEmail?: StringNullableFilter<"Employee"> | string | null
    dateOfJoin?: DateTimeNullableFilter<"Employee"> | Date | string | null
    status?: EnumEmployeeStatusFilter<"Employee"> | $Enums.EmployeeStatus
    companyId?: StringFilter<"Employee"> | string
    country?: EnumCountryCodeFilter<"Employee"> | $Enums.CountryCode
    baseSalary?: FloatFilter<"Employee"> | number
    managerId?: StringNullableFilter<"Employee"> | string | null
    createdAt?: DateTimeFilter<"Employee"> | Date | string
    updatedAt?: DateTimeFilter<"Employee"> | Date | string
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    manager?: XOR<EmployeeNullableScalarRelationFilter, EmployeeWhereInput> | null
    directReports?: EmployeeListRelationFilter
    payrollItems?: PayrollItemListRelationFilter
    contract?: XOR<ContractNullableScalarRelationFilter, ContractWhereInput> | null
    documents?: DocumentListRelationFilter
  }, "id" | "email">

  export type EmployeeOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    workEmail?: SortOrderInput | SortOrder
    dateOfJoin?: SortOrderInput | SortOrder
    status?: SortOrder
    companyId?: SortOrder
    country?: SortOrder
    baseSalary?: SortOrder
    managerId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EmployeeCountOrderByAggregateInput
    _avg?: EmployeeAvgOrderByAggregateInput
    _max?: EmployeeMaxOrderByAggregateInput
    _min?: EmployeeMinOrderByAggregateInput
    _sum?: EmployeeSumOrderByAggregateInput
  }

  export type EmployeeScalarWhereWithAggregatesInput = {
    AND?: EmployeeScalarWhereWithAggregatesInput | EmployeeScalarWhereWithAggregatesInput[]
    OR?: EmployeeScalarWhereWithAggregatesInput[]
    NOT?: EmployeeScalarWhereWithAggregatesInput | EmployeeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Employee"> | string
    firstName?: StringWithAggregatesFilter<"Employee"> | string
    lastName?: StringWithAggregatesFilter<"Employee"> | string
    email?: StringWithAggregatesFilter<"Employee"> | string
    workEmail?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    dateOfJoin?: DateTimeNullableWithAggregatesFilter<"Employee"> | Date | string | null
    status?: EnumEmployeeStatusWithAggregatesFilter<"Employee"> | $Enums.EmployeeStatus
    companyId?: StringWithAggregatesFilter<"Employee"> | string
    country?: EnumCountryCodeWithAggregatesFilter<"Employee"> | $Enums.CountryCode
    baseSalary?: FloatWithAggregatesFilter<"Employee"> | number
    managerId?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Employee"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Employee"> | Date | string
  }

  export type AuditLogWhereInput = {
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    id?: StringFilter<"AuditLog"> | string
    userId?: StringNullableFilter<"AuditLog"> | string | null
    action?: StringFilter<"AuditLog"> | string
    resource?: StringFilter<"AuditLog"> | string
    resourceId?: StringNullableFilter<"AuditLog"> | string | null
    payload?: JsonNullableFilter<"AuditLog">
    ipAddress?: StringNullableFilter<"AuditLog"> | string | null
    userAgent?: StringNullableFilter<"AuditLog"> | string | null
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
  }

  export type AuditLogOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    action?: SortOrder
    resource?: SortOrder
    resourceId?: SortOrderInput | SortOrder
    payload?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    userId?: StringNullableFilter<"AuditLog"> | string | null
    action?: StringFilter<"AuditLog"> | string
    resource?: StringFilter<"AuditLog"> | string
    resourceId?: StringNullableFilter<"AuditLog"> | string | null
    payload?: JsonNullableFilter<"AuditLog">
    ipAddress?: StringNullableFilter<"AuditLog"> | string | null
    userAgent?: StringNullableFilter<"AuditLog"> | string | null
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
  }, "id">

  export type AuditLogOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    action?: SortOrder
    resource?: SortOrder
    resourceId?: SortOrderInput | SortOrder
    payload?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AuditLogCountOrderByAggregateInput
    _max?: AuditLogMaxOrderByAggregateInput
    _min?: AuditLogMinOrderByAggregateInput
  }

  export type AuditLogScalarWhereWithAggregatesInput = {
    AND?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    OR?: AuditLogScalarWhereWithAggregatesInput[]
    NOT?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AuditLog"> | string
    userId?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    action?: StringWithAggregatesFilter<"AuditLog"> | string
    resource?: StringWithAggregatesFilter<"AuditLog"> | string
    resourceId?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    payload?: JsonNullableWithAggregatesFilter<"AuditLog">
    ipAddress?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AuditLog"> | Date | string
  }

  export type PayrollWhereInput = {
    AND?: PayrollWhereInput | PayrollWhereInput[]
    OR?: PayrollWhereInput[]
    NOT?: PayrollWhereInput | PayrollWhereInput[]
    id?: StringFilter<"Payroll"> | string
    companyId?: StringFilter<"Payroll"> | string
    month?: IntFilter<"Payroll"> | number
    year?: IntFilter<"Payroll"> | number
    status?: EnumPayrollStatusFilter<"Payroll"> | $Enums.PayrollStatus
    createdAt?: DateTimeFilter<"Payroll"> | Date | string
    updatedAt?: DateTimeFilter<"Payroll"> | Date | string
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    items?: PayrollItemListRelationFilter
  }

  export type PayrollOrderByWithRelationInput = {
    id?: SortOrder
    companyId?: SortOrder
    month?: SortOrder
    year?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    company?: CompanyOrderByWithRelationInput
    items?: PayrollItemOrderByRelationAggregateInput
  }

  export type PayrollWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    companyId_month_year?: PayrollCompanyIdMonthYearCompoundUniqueInput
    AND?: PayrollWhereInput | PayrollWhereInput[]
    OR?: PayrollWhereInput[]
    NOT?: PayrollWhereInput | PayrollWhereInput[]
    companyId?: StringFilter<"Payroll"> | string
    month?: IntFilter<"Payroll"> | number
    year?: IntFilter<"Payroll"> | number
    status?: EnumPayrollStatusFilter<"Payroll"> | $Enums.PayrollStatus
    createdAt?: DateTimeFilter<"Payroll"> | Date | string
    updatedAt?: DateTimeFilter<"Payroll"> | Date | string
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    items?: PayrollItemListRelationFilter
  }, "id" | "companyId_month_year">

  export type PayrollOrderByWithAggregationInput = {
    id?: SortOrder
    companyId?: SortOrder
    month?: SortOrder
    year?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PayrollCountOrderByAggregateInput
    _avg?: PayrollAvgOrderByAggregateInput
    _max?: PayrollMaxOrderByAggregateInput
    _min?: PayrollMinOrderByAggregateInput
    _sum?: PayrollSumOrderByAggregateInput
  }

  export type PayrollScalarWhereWithAggregatesInput = {
    AND?: PayrollScalarWhereWithAggregatesInput | PayrollScalarWhereWithAggregatesInput[]
    OR?: PayrollScalarWhereWithAggregatesInput[]
    NOT?: PayrollScalarWhereWithAggregatesInput | PayrollScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Payroll"> | string
    companyId?: StringWithAggregatesFilter<"Payroll"> | string
    month?: IntWithAggregatesFilter<"Payroll"> | number
    year?: IntWithAggregatesFilter<"Payroll"> | number
    status?: EnumPayrollStatusWithAggregatesFilter<"Payroll"> | $Enums.PayrollStatus
    createdAt?: DateTimeWithAggregatesFilter<"Payroll"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Payroll"> | Date | string
  }

  export type PayrollItemWhereInput = {
    AND?: PayrollItemWhereInput | PayrollItemWhereInput[]
    OR?: PayrollItemWhereInput[]
    NOT?: PayrollItemWhereInput | PayrollItemWhereInput[]
    id?: StringFilter<"PayrollItem"> | string
    payrollId?: StringFilter<"PayrollItem"> | string
    employeeId?: StringFilter<"PayrollItem"> | string
    grossSalary?: FloatFilter<"PayrollItem"> | number
    netSalary?: FloatFilter<"PayrollItem"> | number
    totalDeductions?: FloatFilter<"PayrollItem"> | number
    totalContributions?: FloatFilter<"PayrollItem"> | number
    details?: JsonFilter<"PayrollItem">
    status?: EnumPayrollItemStatusFilter<"PayrollItem"> | $Enums.PayrollItemStatus
    createdAt?: DateTimeFilter<"PayrollItem"> | Date | string
    updatedAt?: DateTimeFilter<"PayrollItem"> | Date | string
    payroll?: XOR<PayrollScalarRelationFilter, PayrollWhereInput>
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
  }

  export type PayrollItemOrderByWithRelationInput = {
    id?: SortOrder
    payrollId?: SortOrder
    employeeId?: SortOrder
    grossSalary?: SortOrder
    netSalary?: SortOrder
    totalDeductions?: SortOrder
    totalContributions?: SortOrder
    details?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    payroll?: PayrollOrderByWithRelationInput
    employee?: EmployeeOrderByWithRelationInput
  }

  export type PayrollItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PayrollItemWhereInput | PayrollItemWhereInput[]
    OR?: PayrollItemWhereInput[]
    NOT?: PayrollItemWhereInput | PayrollItemWhereInput[]
    payrollId?: StringFilter<"PayrollItem"> | string
    employeeId?: StringFilter<"PayrollItem"> | string
    grossSalary?: FloatFilter<"PayrollItem"> | number
    netSalary?: FloatFilter<"PayrollItem"> | number
    totalDeductions?: FloatFilter<"PayrollItem"> | number
    totalContributions?: FloatFilter<"PayrollItem"> | number
    details?: JsonFilter<"PayrollItem">
    status?: EnumPayrollItemStatusFilter<"PayrollItem"> | $Enums.PayrollItemStatus
    createdAt?: DateTimeFilter<"PayrollItem"> | Date | string
    updatedAt?: DateTimeFilter<"PayrollItem"> | Date | string
    payroll?: XOR<PayrollScalarRelationFilter, PayrollWhereInput>
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
  }, "id">

  export type PayrollItemOrderByWithAggregationInput = {
    id?: SortOrder
    payrollId?: SortOrder
    employeeId?: SortOrder
    grossSalary?: SortOrder
    netSalary?: SortOrder
    totalDeductions?: SortOrder
    totalContributions?: SortOrder
    details?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PayrollItemCountOrderByAggregateInput
    _avg?: PayrollItemAvgOrderByAggregateInput
    _max?: PayrollItemMaxOrderByAggregateInput
    _min?: PayrollItemMinOrderByAggregateInput
    _sum?: PayrollItemSumOrderByAggregateInput
  }

  export type PayrollItemScalarWhereWithAggregatesInput = {
    AND?: PayrollItemScalarWhereWithAggregatesInput | PayrollItemScalarWhereWithAggregatesInput[]
    OR?: PayrollItemScalarWhereWithAggregatesInput[]
    NOT?: PayrollItemScalarWhereWithAggregatesInput | PayrollItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PayrollItem"> | string
    payrollId?: StringWithAggregatesFilter<"PayrollItem"> | string
    employeeId?: StringWithAggregatesFilter<"PayrollItem"> | string
    grossSalary?: FloatWithAggregatesFilter<"PayrollItem"> | number
    netSalary?: FloatWithAggregatesFilter<"PayrollItem"> | number
    totalDeductions?: FloatWithAggregatesFilter<"PayrollItem"> | number
    totalContributions?: FloatWithAggregatesFilter<"PayrollItem"> | number
    details?: JsonWithAggregatesFilter<"PayrollItem">
    status?: EnumPayrollItemStatusWithAggregatesFilter<"PayrollItem"> | $Enums.PayrollItemStatus
    createdAt?: DateTimeWithAggregatesFilter<"PayrollItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PayrollItem"> | Date | string
  }

  export type OfferWhereInput = {
    AND?: OfferWhereInput | OfferWhereInput[]
    OR?: OfferWhereInput[]
    NOT?: OfferWhereInput | OfferWhereInput[]
    id?: StringFilter<"Offer"> | string
    companyId?: StringFilter<"Offer"> | string
    candidateName?: StringFilter<"Offer"> | string
    candidateEmail?: StringFilter<"Offer"> | string
    jobTitle?: StringFilter<"Offer"> | string
    country?: EnumCountryCodeFilter<"Offer"> | $Enums.CountryCode
    salary?: FloatFilter<"Offer"> | number
    status?: EnumOfferStatusFilter<"Offer"> | $Enums.OfferStatus
    validUntil?: DateTimeNullableFilter<"Offer"> | Date | string | null
    details?: JsonNullableFilter<"Offer">
    createdAt?: DateTimeFilter<"Offer"> | Date | string
    updatedAt?: DateTimeFilter<"Offer"> | Date | string
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    contract?: XOR<ContractNullableScalarRelationFilter, ContractWhereInput> | null
  }

  export type OfferOrderByWithRelationInput = {
    id?: SortOrder
    companyId?: SortOrder
    candidateName?: SortOrder
    candidateEmail?: SortOrder
    jobTitle?: SortOrder
    country?: SortOrder
    salary?: SortOrder
    status?: SortOrder
    validUntil?: SortOrderInput | SortOrder
    details?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    company?: CompanyOrderByWithRelationInput
    contract?: ContractOrderByWithRelationInput
  }

  export type OfferWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OfferWhereInput | OfferWhereInput[]
    OR?: OfferWhereInput[]
    NOT?: OfferWhereInput | OfferWhereInput[]
    companyId?: StringFilter<"Offer"> | string
    candidateName?: StringFilter<"Offer"> | string
    candidateEmail?: StringFilter<"Offer"> | string
    jobTitle?: StringFilter<"Offer"> | string
    country?: EnumCountryCodeFilter<"Offer"> | $Enums.CountryCode
    salary?: FloatFilter<"Offer"> | number
    status?: EnumOfferStatusFilter<"Offer"> | $Enums.OfferStatus
    validUntil?: DateTimeNullableFilter<"Offer"> | Date | string | null
    details?: JsonNullableFilter<"Offer">
    createdAt?: DateTimeFilter<"Offer"> | Date | string
    updatedAt?: DateTimeFilter<"Offer"> | Date | string
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    contract?: XOR<ContractNullableScalarRelationFilter, ContractWhereInput> | null
  }, "id">

  export type OfferOrderByWithAggregationInput = {
    id?: SortOrder
    companyId?: SortOrder
    candidateName?: SortOrder
    candidateEmail?: SortOrder
    jobTitle?: SortOrder
    country?: SortOrder
    salary?: SortOrder
    status?: SortOrder
    validUntil?: SortOrderInput | SortOrder
    details?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OfferCountOrderByAggregateInput
    _avg?: OfferAvgOrderByAggregateInput
    _max?: OfferMaxOrderByAggregateInput
    _min?: OfferMinOrderByAggregateInput
    _sum?: OfferSumOrderByAggregateInput
  }

  export type OfferScalarWhereWithAggregatesInput = {
    AND?: OfferScalarWhereWithAggregatesInput | OfferScalarWhereWithAggregatesInput[]
    OR?: OfferScalarWhereWithAggregatesInput[]
    NOT?: OfferScalarWhereWithAggregatesInput | OfferScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Offer"> | string
    companyId?: StringWithAggregatesFilter<"Offer"> | string
    candidateName?: StringWithAggregatesFilter<"Offer"> | string
    candidateEmail?: StringWithAggregatesFilter<"Offer"> | string
    jobTitle?: StringWithAggregatesFilter<"Offer"> | string
    country?: EnumCountryCodeWithAggregatesFilter<"Offer"> | $Enums.CountryCode
    salary?: FloatWithAggregatesFilter<"Offer"> | number
    status?: EnumOfferStatusWithAggregatesFilter<"Offer"> | $Enums.OfferStatus
    validUntil?: DateTimeNullableWithAggregatesFilter<"Offer"> | Date | string | null
    details?: JsonNullableWithAggregatesFilter<"Offer">
    createdAt?: DateTimeWithAggregatesFilter<"Offer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Offer"> | Date | string
  }

  export type ContractWhereInput = {
    AND?: ContractWhereInput | ContractWhereInput[]
    OR?: ContractWhereInput[]
    NOT?: ContractWhereInput | ContractWhereInput[]
    id?: StringFilter<"Contract"> | string
    companyId?: StringFilter<"Contract"> | string
    offerId?: StringNullableFilter<"Contract"> | string | null
    employeeId?: StringNullableFilter<"Contract"> | string | null
    status?: EnumContractStatusFilter<"Contract"> | $Enums.ContractStatus
    content?: StringNullableFilter<"Contract"> | string | null
    legalTerms?: JsonNullableFilter<"Contract">
    signedAt?: DateTimeNullableFilter<"Contract"> | Date | string | null
    validFrom?: DateTimeNullableFilter<"Contract"> | Date | string | null
    validUntil?: DateTimeNullableFilter<"Contract"> | Date | string | null
    createdAt?: DateTimeFilter<"Contract"> | Date | string
    updatedAt?: DateTimeFilter<"Contract"> | Date | string
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    offer?: XOR<OfferNullableScalarRelationFilter, OfferWhereInput> | null
    employee?: XOR<EmployeeNullableScalarRelationFilter, EmployeeWhereInput> | null
  }

  export type ContractOrderByWithRelationInput = {
    id?: SortOrder
    companyId?: SortOrder
    offerId?: SortOrderInput | SortOrder
    employeeId?: SortOrderInput | SortOrder
    status?: SortOrder
    content?: SortOrderInput | SortOrder
    legalTerms?: SortOrderInput | SortOrder
    signedAt?: SortOrderInput | SortOrder
    validFrom?: SortOrderInput | SortOrder
    validUntil?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    company?: CompanyOrderByWithRelationInput
    offer?: OfferOrderByWithRelationInput
    employee?: EmployeeOrderByWithRelationInput
  }

  export type ContractWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    offerId?: string
    employeeId?: string
    AND?: ContractWhereInput | ContractWhereInput[]
    OR?: ContractWhereInput[]
    NOT?: ContractWhereInput | ContractWhereInput[]
    companyId?: StringFilter<"Contract"> | string
    status?: EnumContractStatusFilter<"Contract"> | $Enums.ContractStatus
    content?: StringNullableFilter<"Contract"> | string | null
    legalTerms?: JsonNullableFilter<"Contract">
    signedAt?: DateTimeNullableFilter<"Contract"> | Date | string | null
    validFrom?: DateTimeNullableFilter<"Contract"> | Date | string | null
    validUntil?: DateTimeNullableFilter<"Contract"> | Date | string | null
    createdAt?: DateTimeFilter<"Contract"> | Date | string
    updatedAt?: DateTimeFilter<"Contract"> | Date | string
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    offer?: XOR<OfferNullableScalarRelationFilter, OfferWhereInput> | null
    employee?: XOR<EmployeeNullableScalarRelationFilter, EmployeeWhereInput> | null
  }, "id" | "offerId" | "employeeId">

  export type ContractOrderByWithAggregationInput = {
    id?: SortOrder
    companyId?: SortOrder
    offerId?: SortOrderInput | SortOrder
    employeeId?: SortOrderInput | SortOrder
    status?: SortOrder
    content?: SortOrderInput | SortOrder
    legalTerms?: SortOrderInput | SortOrder
    signedAt?: SortOrderInput | SortOrder
    validFrom?: SortOrderInput | SortOrder
    validUntil?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ContractCountOrderByAggregateInput
    _max?: ContractMaxOrderByAggregateInput
    _min?: ContractMinOrderByAggregateInput
  }

  export type ContractScalarWhereWithAggregatesInput = {
    AND?: ContractScalarWhereWithAggregatesInput | ContractScalarWhereWithAggregatesInput[]
    OR?: ContractScalarWhereWithAggregatesInput[]
    NOT?: ContractScalarWhereWithAggregatesInput | ContractScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Contract"> | string
    companyId?: StringWithAggregatesFilter<"Contract"> | string
    offerId?: StringNullableWithAggregatesFilter<"Contract"> | string | null
    employeeId?: StringNullableWithAggregatesFilter<"Contract"> | string | null
    status?: EnumContractStatusWithAggregatesFilter<"Contract"> | $Enums.ContractStatus
    content?: StringNullableWithAggregatesFilter<"Contract"> | string | null
    legalTerms?: JsonNullableWithAggregatesFilter<"Contract">
    signedAt?: DateTimeNullableWithAggregatesFilter<"Contract"> | Date | string | null
    validFrom?: DateTimeNullableWithAggregatesFilter<"Contract"> | Date | string | null
    validUntil?: DateTimeNullableWithAggregatesFilter<"Contract"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Contract"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Contract"> | Date | string
  }

  export type DocumentWhereInput = {
    AND?: DocumentWhereInput | DocumentWhereInput[]
    OR?: DocumentWhereInput[]
    NOT?: DocumentWhereInput | DocumentWhereInput[]
    id?: StringFilter<"Document"> | string
    name?: StringFilter<"Document"> | string
    type?: StringFilter<"Document"> | string
    url?: StringNullableFilter<"Document"> | string | null
    status?: EnumDocumentStatusFilter<"Document"> | $Enums.DocumentStatus
    employeeId?: StringFilter<"Document"> | string
    meta?: JsonNullableFilter<"Document">
    createdAt?: DateTimeFilter<"Document"> | Date | string
    updatedAt?: DateTimeFilter<"Document"> | Date | string
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
  }

  export type DocumentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    url?: SortOrderInput | SortOrder
    status?: SortOrder
    employeeId?: SortOrder
    meta?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    employee?: EmployeeOrderByWithRelationInput
  }

  export type DocumentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DocumentWhereInput | DocumentWhereInput[]
    OR?: DocumentWhereInput[]
    NOT?: DocumentWhereInput | DocumentWhereInput[]
    name?: StringFilter<"Document"> | string
    type?: StringFilter<"Document"> | string
    url?: StringNullableFilter<"Document"> | string | null
    status?: EnumDocumentStatusFilter<"Document"> | $Enums.DocumentStatus
    employeeId?: StringFilter<"Document"> | string
    meta?: JsonNullableFilter<"Document">
    createdAt?: DateTimeFilter<"Document"> | Date | string
    updatedAt?: DateTimeFilter<"Document"> | Date | string
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
  }, "id">

  export type DocumentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    url?: SortOrderInput | SortOrder
    status?: SortOrder
    employeeId?: SortOrder
    meta?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DocumentCountOrderByAggregateInput
    _max?: DocumentMaxOrderByAggregateInput
    _min?: DocumentMinOrderByAggregateInput
  }

  export type DocumentScalarWhereWithAggregatesInput = {
    AND?: DocumentScalarWhereWithAggregatesInput | DocumentScalarWhereWithAggregatesInput[]
    OR?: DocumentScalarWhereWithAggregatesInput[]
    NOT?: DocumentScalarWhereWithAggregatesInput | DocumentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Document"> | string
    name?: StringWithAggregatesFilter<"Document"> | string
    type?: StringWithAggregatesFilter<"Document"> | string
    url?: StringNullableWithAggregatesFilter<"Document"> | string | null
    status?: EnumDocumentStatusWithAggregatesFilter<"Document"> | $Enums.DocumentStatus
    employeeId?: StringWithAggregatesFilter<"Document"> | string
    meta?: JsonNullableWithAggregatesFilter<"Document">
    createdAt?: DateTimeWithAggregatesFilter<"Document"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Document"> | Date | string
  }

  export type CompanyCreateInput = {
    id?: string
    name: string
    legalName?: string | null
    hqCountry: $Enums.CountryCode
    taxId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutCompanyInput
    employees?: EmployeeCreateNestedManyWithoutCompanyInput
    payrolls?: PayrollCreateNestedManyWithoutCompanyInput
    offers?: OfferCreateNestedManyWithoutCompanyInput
    contracts?: ContractCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateInput = {
    id?: string
    name: string
    legalName?: string | null
    hqCountry: $Enums.CountryCode
    taxId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutCompanyInput
    employees?: EmployeeUncheckedCreateNestedManyWithoutCompanyInput
    payrolls?: PayrollUncheckedCreateNestedManyWithoutCompanyInput
    offers?: OfferUncheckedCreateNestedManyWithoutCompanyInput
    contracts?: ContractUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    legalName?: NullableStringFieldUpdateOperationsInput | string | null
    hqCountry?: EnumCountryCodeFieldUpdateOperationsInput | $Enums.CountryCode
    taxId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutCompanyNestedInput
    employees?: EmployeeUpdateManyWithoutCompanyNestedInput
    payrolls?: PayrollUpdateManyWithoutCompanyNestedInput
    offers?: OfferUpdateManyWithoutCompanyNestedInput
    contracts?: ContractUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    legalName?: NullableStringFieldUpdateOperationsInput | string | null
    hqCountry?: EnumCountryCodeFieldUpdateOperationsInput | $Enums.CountryCode
    taxId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutCompanyNestedInput
    employees?: EmployeeUncheckedUpdateManyWithoutCompanyNestedInput
    payrolls?: PayrollUncheckedUpdateManyWithoutCompanyNestedInput
    offers?: OfferUncheckedUpdateManyWithoutCompanyNestedInput
    contracts?: ContractUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyCreateManyInput = {
    id?: string
    name: string
    legalName?: string | null
    hqCountry: $Enums.CountryCode
    taxId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompanyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    legalName?: NullableStringFieldUpdateOperationsInput | string | null
    hqCountry?: EnumCountryCodeFieldUpdateOperationsInput | $Enums.CountryCode
    taxId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    legalName?: NullableStringFieldUpdateOperationsInput | string | null
    hqCountry?: EnumCountryCodeFieldUpdateOperationsInput | $Enums.CountryCode
    taxId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    passwordHash: string
    firstName: string
    lastName: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    company?: CompanyCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    passwordHash: string
    firstName: string
    lastName: string
    role?: $Enums.Role
    companyId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    companyId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    passwordHash: string
    firstName: string
    lastName: string
    role?: $Enums.Role
    companyId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    companyId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeCreateInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    workEmail?: string | null
    dateOfJoin?: Date | string | null
    status?: $Enums.EmployeeStatus
    country: $Enums.CountryCode
    baseSalary?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    company: CompanyCreateNestedOneWithoutEmployeesInput
    manager?: EmployeeCreateNestedOneWithoutDirectReportsInput
    directReports?: EmployeeCreateNestedManyWithoutManagerInput
    payrollItems?: PayrollItemCreateNestedManyWithoutEmployeeInput
    contract?: ContractCreateNestedOneWithoutEmployeeInput
    documents?: DocumentCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    workEmail?: string | null
    dateOfJoin?: Date | string | null
    status?: $Enums.EmployeeStatus
    companyId: string
    country: $Enums.CountryCode
    baseSalary?: number
    managerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    directReports?: EmployeeUncheckedCreateNestedManyWithoutManagerInput
    payrollItems?: PayrollItemUncheckedCreateNestedManyWithoutEmployeeInput
    contract?: ContractUncheckedCreateNestedOneWithoutEmployeeInput
    documents?: DocumentUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    workEmail?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfJoin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumEmployeeStatusFieldUpdateOperationsInput | $Enums.EmployeeStatus
    country?: EnumCountryCodeFieldUpdateOperationsInput | $Enums.CountryCode
    baseSalary?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutEmployeesNestedInput
    manager?: EmployeeUpdateOneWithoutDirectReportsNestedInput
    directReports?: EmployeeUpdateManyWithoutManagerNestedInput
    payrollItems?: PayrollItemUpdateManyWithoutEmployeeNestedInput
    contract?: ContractUpdateOneWithoutEmployeeNestedInput
    documents?: DocumentUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    workEmail?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfJoin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumEmployeeStatusFieldUpdateOperationsInput | $Enums.EmployeeStatus
    companyId?: StringFieldUpdateOperationsInput | string
    country?: EnumCountryCodeFieldUpdateOperationsInput | $Enums.CountryCode
    baseSalary?: FloatFieldUpdateOperationsInput | number
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    directReports?: EmployeeUncheckedUpdateManyWithoutManagerNestedInput
    payrollItems?: PayrollItemUncheckedUpdateManyWithoutEmployeeNestedInput
    contract?: ContractUncheckedUpdateOneWithoutEmployeeNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeCreateManyInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    workEmail?: string | null
    dateOfJoin?: Date | string | null
    status?: $Enums.EmployeeStatus
    companyId: string
    country: $Enums.CountryCode
    baseSalary?: number
    managerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmployeeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    workEmail?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfJoin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumEmployeeStatusFieldUpdateOperationsInput | $Enums.EmployeeStatus
    country?: EnumCountryCodeFieldUpdateOperationsInput | $Enums.CountryCode
    baseSalary?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    workEmail?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfJoin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumEmployeeStatusFieldUpdateOperationsInput | $Enums.EmployeeStatus
    companyId?: StringFieldUpdateOperationsInput | string
    country?: EnumCountryCodeFieldUpdateOperationsInput | $Enums.CountryCode
    baseSalary?: FloatFieldUpdateOperationsInput | number
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateInput = {
    id?: string
    userId?: string | null
    action: string
    resource: string
    resourceId?: string | null
    payload?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
  }

  export type AuditLogUncheckedCreateInput = {
    id?: string
    userId?: string | null
    action: string
    resource: string
    resourceId?: string | null
    payload?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
  }

  export type AuditLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    resource?: StringFieldUpdateOperationsInput | string
    resourceId?: NullableStringFieldUpdateOperationsInput | string | null
    payload?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    resource?: StringFieldUpdateOperationsInput | string
    resourceId?: NullableStringFieldUpdateOperationsInput | string | null
    payload?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateManyInput = {
    id?: string
    userId?: string | null
    action: string
    resource: string
    resourceId?: string | null
    payload?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
  }

  export type AuditLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    resource?: StringFieldUpdateOperationsInput | string
    resourceId?: NullableStringFieldUpdateOperationsInput | string | null
    payload?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    resource?: StringFieldUpdateOperationsInput | string
    resourceId?: NullableStringFieldUpdateOperationsInput | string | null
    payload?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayrollCreateInput = {
    id?: string
    month: number
    year: number
    status?: $Enums.PayrollStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    company: CompanyCreateNestedOneWithoutPayrollsInput
    items?: PayrollItemCreateNestedManyWithoutPayrollInput
  }

  export type PayrollUncheckedCreateInput = {
    id?: string
    companyId: string
    month: number
    year: number
    status?: $Enums.PayrollStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: PayrollItemUncheckedCreateNestedManyWithoutPayrollInput
  }

  export type PayrollUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    status?: EnumPayrollStatusFieldUpdateOperationsInput | $Enums.PayrollStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutPayrollsNestedInput
    items?: PayrollItemUpdateManyWithoutPayrollNestedInput
  }

  export type PayrollUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    status?: EnumPayrollStatusFieldUpdateOperationsInput | $Enums.PayrollStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: PayrollItemUncheckedUpdateManyWithoutPayrollNestedInput
  }

  export type PayrollCreateManyInput = {
    id?: string
    companyId: string
    month: number
    year: number
    status?: $Enums.PayrollStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PayrollUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    status?: EnumPayrollStatusFieldUpdateOperationsInput | $Enums.PayrollStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayrollUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    status?: EnumPayrollStatusFieldUpdateOperationsInput | $Enums.PayrollStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayrollItemCreateInput = {
    id?: string
    grossSalary: number
    netSalary: number
    totalDeductions: number
    totalContributions: number
    details: JsonNullValueInput | InputJsonValue
    status?: $Enums.PayrollItemStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    payroll: PayrollCreateNestedOneWithoutItemsInput
    employee: EmployeeCreateNestedOneWithoutPayrollItemsInput
  }

  export type PayrollItemUncheckedCreateInput = {
    id?: string
    payrollId: string
    employeeId: string
    grossSalary: number
    netSalary: number
    totalDeductions: number
    totalContributions: number
    details: JsonNullValueInput | InputJsonValue
    status?: $Enums.PayrollItemStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PayrollItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    grossSalary?: FloatFieldUpdateOperationsInput | number
    netSalary?: FloatFieldUpdateOperationsInput | number
    totalDeductions?: FloatFieldUpdateOperationsInput | number
    totalContributions?: FloatFieldUpdateOperationsInput | number
    details?: JsonNullValueInput | InputJsonValue
    status?: EnumPayrollItemStatusFieldUpdateOperationsInput | $Enums.PayrollItemStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payroll?: PayrollUpdateOneRequiredWithoutItemsNestedInput
    employee?: EmployeeUpdateOneRequiredWithoutPayrollItemsNestedInput
  }

  export type PayrollItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    payrollId?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    grossSalary?: FloatFieldUpdateOperationsInput | number
    netSalary?: FloatFieldUpdateOperationsInput | number
    totalDeductions?: FloatFieldUpdateOperationsInput | number
    totalContributions?: FloatFieldUpdateOperationsInput | number
    details?: JsonNullValueInput | InputJsonValue
    status?: EnumPayrollItemStatusFieldUpdateOperationsInput | $Enums.PayrollItemStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayrollItemCreateManyInput = {
    id?: string
    payrollId: string
    employeeId: string
    grossSalary: number
    netSalary: number
    totalDeductions: number
    totalContributions: number
    details: JsonNullValueInput | InputJsonValue
    status?: $Enums.PayrollItemStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PayrollItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    grossSalary?: FloatFieldUpdateOperationsInput | number
    netSalary?: FloatFieldUpdateOperationsInput | number
    totalDeductions?: FloatFieldUpdateOperationsInput | number
    totalContributions?: FloatFieldUpdateOperationsInput | number
    details?: JsonNullValueInput | InputJsonValue
    status?: EnumPayrollItemStatusFieldUpdateOperationsInput | $Enums.PayrollItemStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayrollItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    payrollId?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    grossSalary?: FloatFieldUpdateOperationsInput | number
    netSalary?: FloatFieldUpdateOperationsInput | number
    totalDeductions?: FloatFieldUpdateOperationsInput | number
    totalContributions?: FloatFieldUpdateOperationsInput | number
    details?: JsonNullValueInput | InputJsonValue
    status?: EnumPayrollItemStatusFieldUpdateOperationsInput | $Enums.PayrollItemStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OfferCreateInput = {
    id?: string
    candidateName: string
    candidateEmail: string
    jobTitle: string
    country: $Enums.CountryCode
    salary: number
    status?: $Enums.OfferStatus
    validUntil?: Date | string | null
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    company: CompanyCreateNestedOneWithoutOffersInput
    contract?: ContractCreateNestedOneWithoutOfferInput
  }

  export type OfferUncheckedCreateInput = {
    id?: string
    companyId: string
    candidateName: string
    candidateEmail: string
    jobTitle: string
    country: $Enums.CountryCode
    salary: number
    status?: $Enums.OfferStatus
    validUntil?: Date | string | null
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    contract?: ContractUncheckedCreateNestedOneWithoutOfferInput
  }

  export type OfferUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    candidateName?: StringFieldUpdateOperationsInput | string
    candidateEmail?: StringFieldUpdateOperationsInput | string
    jobTitle?: StringFieldUpdateOperationsInput | string
    country?: EnumCountryCodeFieldUpdateOperationsInput | $Enums.CountryCode
    salary?: FloatFieldUpdateOperationsInput | number
    status?: EnumOfferStatusFieldUpdateOperationsInput | $Enums.OfferStatus
    validUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutOffersNestedInput
    contract?: ContractUpdateOneWithoutOfferNestedInput
  }

  export type OfferUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    candidateName?: StringFieldUpdateOperationsInput | string
    candidateEmail?: StringFieldUpdateOperationsInput | string
    jobTitle?: StringFieldUpdateOperationsInput | string
    country?: EnumCountryCodeFieldUpdateOperationsInput | $Enums.CountryCode
    salary?: FloatFieldUpdateOperationsInput | number
    status?: EnumOfferStatusFieldUpdateOperationsInput | $Enums.OfferStatus
    validUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contract?: ContractUncheckedUpdateOneWithoutOfferNestedInput
  }

  export type OfferCreateManyInput = {
    id?: string
    companyId: string
    candidateName: string
    candidateEmail: string
    jobTitle: string
    country: $Enums.CountryCode
    salary: number
    status?: $Enums.OfferStatus
    validUntil?: Date | string | null
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OfferUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    candidateName?: StringFieldUpdateOperationsInput | string
    candidateEmail?: StringFieldUpdateOperationsInput | string
    jobTitle?: StringFieldUpdateOperationsInput | string
    country?: EnumCountryCodeFieldUpdateOperationsInput | $Enums.CountryCode
    salary?: FloatFieldUpdateOperationsInput | number
    status?: EnumOfferStatusFieldUpdateOperationsInput | $Enums.OfferStatus
    validUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OfferUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    candidateName?: StringFieldUpdateOperationsInput | string
    candidateEmail?: StringFieldUpdateOperationsInput | string
    jobTitle?: StringFieldUpdateOperationsInput | string
    country?: EnumCountryCodeFieldUpdateOperationsInput | $Enums.CountryCode
    salary?: FloatFieldUpdateOperationsInput | number
    status?: EnumOfferStatusFieldUpdateOperationsInput | $Enums.OfferStatus
    validUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContractCreateInput = {
    id?: string
    status?: $Enums.ContractStatus
    content?: string | null
    legalTerms?: NullableJsonNullValueInput | InputJsonValue
    signedAt?: Date | string | null
    validFrom?: Date | string | null
    validUntil?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    company: CompanyCreateNestedOneWithoutContractsInput
    offer?: OfferCreateNestedOneWithoutContractInput
    employee?: EmployeeCreateNestedOneWithoutContractInput
  }

  export type ContractUncheckedCreateInput = {
    id?: string
    companyId: string
    offerId?: string | null
    employeeId?: string | null
    status?: $Enums.ContractStatus
    content?: string | null
    legalTerms?: NullableJsonNullValueInput | InputJsonValue
    signedAt?: Date | string | null
    validFrom?: Date | string | null
    validUntil?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContractUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumContractStatusFieldUpdateOperationsInput | $Enums.ContractStatus
    content?: NullableStringFieldUpdateOperationsInput | string | null
    legalTerms?: NullableJsonNullValueInput | InputJsonValue
    signedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    validFrom?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    validUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutContractsNestedInput
    offer?: OfferUpdateOneWithoutContractNestedInput
    employee?: EmployeeUpdateOneWithoutContractNestedInput
  }

  export type ContractUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    offerId?: NullableStringFieldUpdateOperationsInput | string | null
    employeeId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumContractStatusFieldUpdateOperationsInput | $Enums.ContractStatus
    content?: NullableStringFieldUpdateOperationsInput | string | null
    legalTerms?: NullableJsonNullValueInput | InputJsonValue
    signedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    validFrom?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    validUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContractCreateManyInput = {
    id?: string
    companyId: string
    offerId?: string | null
    employeeId?: string | null
    status?: $Enums.ContractStatus
    content?: string | null
    legalTerms?: NullableJsonNullValueInput | InputJsonValue
    signedAt?: Date | string | null
    validFrom?: Date | string | null
    validUntil?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContractUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumContractStatusFieldUpdateOperationsInput | $Enums.ContractStatus
    content?: NullableStringFieldUpdateOperationsInput | string | null
    legalTerms?: NullableJsonNullValueInput | InputJsonValue
    signedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    validFrom?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    validUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContractUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    offerId?: NullableStringFieldUpdateOperationsInput | string | null
    employeeId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumContractStatusFieldUpdateOperationsInput | $Enums.ContractStatus
    content?: NullableStringFieldUpdateOperationsInput | string | null
    legalTerms?: NullableJsonNullValueInput | InputJsonValue
    signedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    validFrom?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    validUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentCreateInput = {
    id?: string
    name: string
    type: string
    url?: string | null
    status?: $Enums.DocumentStatus
    meta?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    employee: EmployeeCreateNestedOneWithoutDocumentsInput
  }

  export type DocumentUncheckedCreateInput = {
    id?: string
    name: string
    type: string
    url?: string | null
    status?: $Enums.DocumentStatus
    employeeId: string
    meta?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DocumentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus
    meta?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: EmployeeUpdateOneRequiredWithoutDocumentsNestedInput
  }

  export type DocumentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus
    employeeId?: StringFieldUpdateOperationsInput | string
    meta?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentCreateManyInput = {
    id?: string
    name: string
    type: string
    url?: string | null
    status?: $Enums.DocumentStatus
    employeeId: string
    meta?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DocumentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus
    meta?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus
    employeeId?: StringFieldUpdateOperationsInput | string
    meta?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumCountryCodeFilter<$PrismaModel = never> = {
    equals?: $Enums.CountryCode | EnumCountryCodeFieldRefInput<$PrismaModel>
    in?: $Enums.CountryCode[] | ListEnumCountryCodeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CountryCode[] | ListEnumCountryCodeFieldRefInput<$PrismaModel>
    not?: NestedEnumCountryCodeFilter<$PrismaModel> | $Enums.CountryCode
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type EmployeeListRelationFilter = {
    every?: EmployeeWhereInput
    some?: EmployeeWhereInput
    none?: EmployeeWhereInput
  }

  export type PayrollListRelationFilter = {
    every?: PayrollWhereInput
    some?: PayrollWhereInput
    none?: PayrollWhereInput
  }

  export type OfferListRelationFilter = {
    every?: OfferWhereInput
    some?: OfferWhereInput
    none?: OfferWhereInput
  }

  export type ContractListRelationFilter = {
    every?: ContractWhereInput
    some?: ContractWhereInput
    none?: ContractWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmployeeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PayrollOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OfferOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ContractOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CompanyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    legalName?: SortOrder
    hqCountry?: SortOrder
    taxId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompanyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    legalName?: SortOrder
    hqCountry?: SortOrder
    taxId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompanyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    legalName?: SortOrder
    hqCountry?: SortOrder
    taxId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumCountryCodeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CountryCode | EnumCountryCodeFieldRefInput<$PrismaModel>
    in?: $Enums.CountryCode[] | ListEnumCountryCodeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CountryCode[] | ListEnumCountryCodeFieldRefInput<$PrismaModel>
    not?: NestedEnumCountryCodeWithAggregatesFilter<$PrismaModel> | $Enums.CountryCode
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCountryCodeFilter<$PrismaModel>
    _max?: NestedEnumCountryCodeFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type CompanyNullableScalarRelationFilter = {
    is?: CompanyWhereInput | null
    isNot?: CompanyWhereInput | null
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    role?: SortOrder
    companyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    role?: SortOrder
    companyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    role?: SortOrder
    companyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumEmployeeStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EmployeeStatus | EnumEmployeeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EmployeeStatus[] | ListEnumEmployeeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmployeeStatus[] | ListEnumEmployeeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEmployeeStatusFilter<$PrismaModel> | $Enums.EmployeeStatus
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type CompanyScalarRelationFilter = {
    is?: CompanyWhereInput
    isNot?: CompanyWhereInput
  }

  export type EmployeeNullableScalarRelationFilter = {
    is?: EmployeeWhereInput | null
    isNot?: EmployeeWhereInput | null
  }

  export type PayrollItemListRelationFilter = {
    every?: PayrollItemWhereInput
    some?: PayrollItemWhereInput
    none?: PayrollItemWhereInput
  }

  export type ContractNullableScalarRelationFilter = {
    is?: ContractWhereInput | null
    isNot?: ContractWhereInput | null
  }

  export type DocumentListRelationFilter = {
    every?: DocumentWhereInput
    some?: DocumentWhereInput
    none?: DocumentWhereInput
  }

  export type PayrollItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DocumentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmployeeCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    workEmail?: SortOrder
    dateOfJoin?: SortOrder
    status?: SortOrder
    companyId?: SortOrder
    country?: SortOrder
    baseSalary?: SortOrder
    managerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmployeeAvgOrderByAggregateInput = {
    baseSalary?: SortOrder
  }

  export type EmployeeMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    workEmail?: SortOrder
    dateOfJoin?: SortOrder
    status?: SortOrder
    companyId?: SortOrder
    country?: SortOrder
    baseSalary?: SortOrder
    managerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmployeeMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    workEmail?: SortOrder
    dateOfJoin?: SortOrder
    status?: SortOrder
    companyId?: SortOrder
    country?: SortOrder
    baseSalary?: SortOrder
    managerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmployeeSumOrderByAggregateInput = {
    baseSalary?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumEmployeeStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EmployeeStatus | EnumEmployeeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EmployeeStatus[] | ListEnumEmployeeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmployeeStatus[] | ListEnumEmployeeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEmployeeStatusWithAggregatesFilter<$PrismaModel> | $Enums.EmployeeStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEmployeeStatusFilter<$PrismaModel>
    _max?: NestedEnumEmployeeStatusFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type AuditLogCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    resource?: SortOrder
    resourceId?: SortOrder
    payload?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    resource?: SortOrder
    resourceId?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    resource?: SortOrder
    resourceId?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    createdAt?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumPayrollStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PayrollStatus | EnumPayrollStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PayrollStatus[] | ListEnumPayrollStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PayrollStatus[] | ListEnumPayrollStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPayrollStatusFilter<$PrismaModel> | $Enums.PayrollStatus
  }

  export type PayrollCompanyIdMonthYearCompoundUniqueInput = {
    companyId: string
    month: number
    year: number
  }

  export type PayrollCountOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    month?: SortOrder
    year?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PayrollAvgOrderByAggregateInput = {
    month?: SortOrder
    year?: SortOrder
  }

  export type PayrollMaxOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    month?: SortOrder
    year?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PayrollMinOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    month?: SortOrder
    year?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PayrollSumOrderByAggregateInput = {
    month?: SortOrder
    year?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumPayrollStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PayrollStatus | EnumPayrollStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PayrollStatus[] | ListEnumPayrollStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PayrollStatus[] | ListEnumPayrollStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPayrollStatusWithAggregatesFilter<$PrismaModel> | $Enums.PayrollStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPayrollStatusFilter<$PrismaModel>
    _max?: NestedEnumPayrollStatusFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type EnumPayrollItemStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PayrollItemStatus | EnumPayrollItemStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PayrollItemStatus[] | ListEnumPayrollItemStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PayrollItemStatus[] | ListEnumPayrollItemStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPayrollItemStatusFilter<$PrismaModel> | $Enums.PayrollItemStatus
  }

  export type PayrollScalarRelationFilter = {
    is?: PayrollWhereInput
    isNot?: PayrollWhereInput
  }

  export type EmployeeScalarRelationFilter = {
    is?: EmployeeWhereInput
    isNot?: EmployeeWhereInput
  }

  export type PayrollItemCountOrderByAggregateInput = {
    id?: SortOrder
    payrollId?: SortOrder
    employeeId?: SortOrder
    grossSalary?: SortOrder
    netSalary?: SortOrder
    totalDeductions?: SortOrder
    totalContributions?: SortOrder
    details?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PayrollItemAvgOrderByAggregateInput = {
    grossSalary?: SortOrder
    netSalary?: SortOrder
    totalDeductions?: SortOrder
    totalContributions?: SortOrder
  }

  export type PayrollItemMaxOrderByAggregateInput = {
    id?: SortOrder
    payrollId?: SortOrder
    employeeId?: SortOrder
    grossSalary?: SortOrder
    netSalary?: SortOrder
    totalDeductions?: SortOrder
    totalContributions?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PayrollItemMinOrderByAggregateInput = {
    id?: SortOrder
    payrollId?: SortOrder
    employeeId?: SortOrder
    grossSalary?: SortOrder
    netSalary?: SortOrder
    totalDeductions?: SortOrder
    totalContributions?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PayrollItemSumOrderByAggregateInput = {
    grossSalary?: SortOrder
    netSalary?: SortOrder
    totalDeductions?: SortOrder
    totalContributions?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type EnumPayrollItemStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PayrollItemStatus | EnumPayrollItemStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PayrollItemStatus[] | ListEnumPayrollItemStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PayrollItemStatus[] | ListEnumPayrollItemStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPayrollItemStatusWithAggregatesFilter<$PrismaModel> | $Enums.PayrollItemStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPayrollItemStatusFilter<$PrismaModel>
    _max?: NestedEnumPayrollItemStatusFilter<$PrismaModel>
  }

  export type EnumOfferStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OfferStatus | EnumOfferStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OfferStatus[] | ListEnumOfferStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OfferStatus[] | ListEnumOfferStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOfferStatusFilter<$PrismaModel> | $Enums.OfferStatus
  }

  export type OfferCountOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    candidateName?: SortOrder
    candidateEmail?: SortOrder
    jobTitle?: SortOrder
    country?: SortOrder
    salary?: SortOrder
    status?: SortOrder
    validUntil?: SortOrder
    details?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OfferAvgOrderByAggregateInput = {
    salary?: SortOrder
  }

  export type OfferMaxOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    candidateName?: SortOrder
    candidateEmail?: SortOrder
    jobTitle?: SortOrder
    country?: SortOrder
    salary?: SortOrder
    status?: SortOrder
    validUntil?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OfferMinOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    candidateName?: SortOrder
    candidateEmail?: SortOrder
    jobTitle?: SortOrder
    country?: SortOrder
    salary?: SortOrder
    status?: SortOrder
    validUntil?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OfferSumOrderByAggregateInput = {
    salary?: SortOrder
  }

  export type EnumOfferStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OfferStatus | EnumOfferStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OfferStatus[] | ListEnumOfferStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OfferStatus[] | ListEnumOfferStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOfferStatusWithAggregatesFilter<$PrismaModel> | $Enums.OfferStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOfferStatusFilter<$PrismaModel>
    _max?: NestedEnumOfferStatusFilter<$PrismaModel>
  }

  export type EnumContractStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ContractStatus | EnumContractStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ContractStatus[] | ListEnumContractStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContractStatus[] | ListEnumContractStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumContractStatusFilter<$PrismaModel> | $Enums.ContractStatus
  }

  export type OfferNullableScalarRelationFilter = {
    is?: OfferWhereInput | null
    isNot?: OfferWhereInput | null
  }

  export type ContractCountOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    offerId?: SortOrder
    employeeId?: SortOrder
    status?: SortOrder
    content?: SortOrder
    legalTerms?: SortOrder
    signedAt?: SortOrder
    validFrom?: SortOrder
    validUntil?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContractMaxOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    offerId?: SortOrder
    employeeId?: SortOrder
    status?: SortOrder
    content?: SortOrder
    signedAt?: SortOrder
    validFrom?: SortOrder
    validUntil?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContractMinOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    offerId?: SortOrder
    employeeId?: SortOrder
    status?: SortOrder
    content?: SortOrder
    signedAt?: SortOrder
    validFrom?: SortOrder
    validUntil?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumContractStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ContractStatus | EnumContractStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ContractStatus[] | ListEnumContractStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContractStatus[] | ListEnumContractStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumContractStatusWithAggregatesFilter<$PrismaModel> | $Enums.ContractStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumContractStatusFilter<$PrismaModel>
    _max?: NestedEnumContractStatusFilter<$PrismaModel>
  }

  export type EnumDocumentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentStatus | EnumDocumentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DocumentStatus[] | ListEnumDocumentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DocumentStatus[] | ListEnumDocumentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDocumentStatusFilter<$PrismaModel> | $Enums.DocumentStatus
  }

  export type DocumentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    url?: SortOrder
    status?: SortOrder
    employeeId?: SortOrder
    meta?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DocumentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    url?: SortOrder
    status?: SortOrder
    employeeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DocumentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    url?: SortOrder
    status?: SortOrder
    employeeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumDocumentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentStatus | EnumDocumentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DocumentStatus[] | ListEnumDocumentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DocumentStatus[] | ListEnumDocumentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDocumentStatusWithAggregatesFilter<$PrismaModel> | $Enums.DocumentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDocumentStatusFilter<$PrismaModel>
    _max?: NestedEnumDocumentStatusFilter<$PrismaModel>
  }

  export type UserCreateNestedManyWithoutCompanyInput = {
    create?: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput> | UserCreateWithoutCompanyInput[] | UserUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCompanyInput | UserCreateOrConnectWithoutCompanyInput[]
    createMany?: UserCreateManyCompanyInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type EmployeeCreateNestedManyWithoutCompanyInput = {
    create?: XOR<EmployeeCreateWithoutCompanyInput, EmployeeUncheckedCreateWithoutCompanyInput> | EmployeeCreateWithoutCompanyInput[] | EmployeeUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutCompanyInput | EmployeeCreateOrConnectWithoutCompanyInput[]
    createMany?: EmployeeCreateManyCompanyInputEnvelope
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
  }

  export type PayrollCreateNestedManyWithoutCompanyInput = {
    create?: XOR<PayrollCreateWithoutCompanyInput, PayrollUncheckedCreateWithoutCompanyInput> | PayrollCreateWithoutCompanyInput[] | PayrollUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: PayrollCreateOrConnectWithoutCompanyInput | PayrollCreateOrConnectWithoutCompanyInput[]
    createMany?: PayrollCreateManyCompanyInputEnvelope
    connect?: PayrollWhereUniqueInput | PayrollWhereUniqueInput[]
  }

  export type OfferCreateNestedManyWithoutCompanyInput = {
    create?: XOR<OfferCreateWithoutCompanyInput, OfferUncheckedCreateWithoutCompanyInput> | OfferCreateWithoutCompanyInput[] | OfferUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: OfferCreateOrConnectWithoutCompanyInput | OfferCreateOrConnectWithoutCompanyInput[]
    createMany?: OfferCreateManyCompanyInputEnvelope
    connect?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
  }

  export type ContractCreateNestedManyWithoutCompanyInput = {
    create?: XOR<ContractCreateWithoutCompanyInput, ContractUncheckedCreateWithoutCompanyInput> | ContractCreateWithoutCompanyInput[] | ContractUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: ContractCreateOrConnectWithoutCompanyInput | ContractCreateOrConnectWithoutCompanyInput[]
    createMany?: ContractCreateManyCompanyInputEnvelope
    connect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput> | UserCreateWithoutCompanyInput[] | UserUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCompanyInput | UserCreateOrConnectWithoutCompanyInput[]
    createMany?: UserCreateManyCompanyInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type EmployeeUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<EmployeeCreateWithoutCompanyInput, EmployeeUncheckedCreateWithoutCompanyInput> | EmployeeCreateWithoutCompanyInput[] | EmployeeUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutCompanyInput | EmployeeCreateOrConnectWithoutCompanyInput[]
    createMany?: EmployeeCreateManyCompanyInputEnvelope
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
  }

  export type PayrollUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<PayrollCreateWithoutCompanyInput, PayrollUncheckedCreateWithoutCompanyInput> | PayrollCreateWithoutCompanyInput[] | PayrollUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: PayrollCreateOrConnectWithoutCompanyInput | PayrollCreateOrConnectWithoutCompanyInput[]
    createMany?: PayrollCreateManyCompanyInputEnvelope
    connect?: PayrollWhereUniqueInput | PayrollWhereUniqueInput[]
  }

  export type OfferUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<OfferCreateWithoutCompanyInput, OfferUncheckedCreateWithoutCompanyInput> | OfferCreateWithoutCompanyInput[] | OfferUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: OfferCreateOrConnectWithoutCompanyInput | OfferCreateOrConnectWithoutCompanyInput[]
    createMany?: OfferCreateManyCompanyInputEnvelope
    connect?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
  }

  export type ContractUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<ContractCreateWithoutCompanyInput, ContractUncheckedCreateWithoutCompanyInput> | ContractCreateWithoutCompanyInput[] | ContractUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: ContractCreateOrConnectWithoutCompanyInput | ContractCreateOrConnectWithoutCompanyInput[]
    createMany?: ContractCreateManyCompanyInputEnvelope
    connect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumCountryCodeFieldUpdateOperationsInput = {
    set?: $Enums.CountryCode
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput> | UserCreateWithoutCompanyInput[] | UserUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCompanyInput | UserCreateOrConnectWithoutCompanyInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutCompanyInput | UserUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: UserCreateManyCompanyInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutCompanyInput | UserUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: UserUpdateManyWithWhereWithoutCompanyInput | UserUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type EmployeeUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<EmployeeCreateWithoutCompanyInput, EmployeeUncheckedCreateWithoutCompanyInput> | EmployeeCreateWithoutCompanyInput[] | EmployeeUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutCompanyInput | EmployeeCreateOrConnectWithoutCompanyInput[]
    upsert?: EmployeeUpsertWithWhereUniqueWithoutCompanyInput | EmployeeUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: EmployeeCreateManyCompanyInputEnvelope
    set?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    disconnect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    delete?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    update?: EmployeeUpdateWithWhereUniqueWithoutCompanyInput | EmployeeUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: EmployeeUpdateManyWithWhereWithoutCompanyInput | EmployeeUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
  }

  export type PayrollUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<PayrollCreateWithoutCompanyInput, PayrollUncheckedCreateWithoutCompanyInput> | PayrollCreateWithoutCompanyInput[] | PayrollUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: PayrollCreateOrConnectWithoutCompanyInput | PayrollCreateOrConnectWithoutCompanyInput[]
    upsert?: PayrollUpsertWithWhereUniqueWithoutCompanyInput | PayrollUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: PayrollCreateManyCompanyInputEnvelope
    set?: PayrollWhereUniqueInput | PayrollWhereUniqueInput[]
    disconnect?: PayrollWhereUniqueInput | PayrollWhereUniqueInput[]
    delete?: PayrollWhereUniqueInput | PayrollWhereUniqueInput[]
    connect?: PayrollWhereUniqueInput | PayrollWhereUniqueInput[]
    update?: PayrollUpdateWithWhereUniqueWithoutCompanyInput | PayrollUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: PayrollUpdateManyWithWhereWithoutCompanyInput | PayrollUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: PayrollScalarWhereInput | PayrollScalarWhereInput[]
  }

  export type OfferUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<OfferCreateWithoutCompanyInput, OfferUncheckedCreateWithoutCompanyInput> | OfferCreateWithoutCompanyInput[] | OfferUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: OfferCreateOrConnectWithoutCompanyInput | OfferCreateOrConnectWithoutCompanyInput[]
    upsert?: OfferUpsertWithWhereUniqueWithoutCompanyInput | OfferUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: OfferCreateManyCompanyInputEnvelope
    set?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    disconnect?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    delete?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    connect?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    update?: OfferUpdateWithWhereUniqueWithoutCompanyInput | OfferUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: OfferUpdateManyWithWhereWithoutCompanyInput | OfferUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: OfferScalarWhereInput | OfferScalarWhereInput[]
  }

  export type ContractUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<ContractCreateWithoutCompanyInput, ContractUncheckedCreateWithoutCompanyInput> | ContractCreateWithoutCompanyInput[] | ContractUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: ContractCreateOrConnectWithoutCompanyInput | ContractCreateOrConnectWithoutCompanyInput[]
    upsert?: ContractUpsertWithWhereUniqueWithoutCompanyInput | ContractUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: ContractCreateManyCompanyInputEnvelope
    set?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    disconnect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    delete?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    connect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    update?: ContractUpdateWithWhereUniqueWithoutCompanyInput | ContractUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: ContractUpdateManyWithWhereWithoutCompanyInput | ContractUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: ContractScalarWhereInput | ContractScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput> | UserCreateWithoutCompanyInput[] | UserUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCompanyInput | UserCreateOrConnectWithoutCompanyInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutCompanyInput | UserUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: UserCreateManyCompanyInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutCompanyInput | UserUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: UserUpdateManyWithWhereWithoutCompanyInput | UserUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type EmployeeUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<EmployeeCreateWithoutCompanyInput, EmployeeUncheckedCreateWithoutCompanyInput> | EmployeeCreateWithoutCompanyInput[] | EmployeeUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutCompanyInput | EmployeeCreateOrConnectWithoutCompanyInput[]
    upsert?: EmployeeUpsertWithWhereUniqueWithoutCompanyInput | EmployeeUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: EmployeeCreateManyCompanyInputEnvelope
    set?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    disconnect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    delete?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    update?: EmployeeUpdateWithWhereUniqueWithoutCompanyInput | EmployeeUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: EmployeeUpdateManyWithWhereWithoutCompanyInput | EmployeeUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
  }

  export type PayrollUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<PayrollCreateWithoutCompanyInput, PayrollUncheckedCreateWithoutCompanyInput> | PayrollCreateWithoutCompanyInput[] | PayrollUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: PayrollCreateOrConnectWithoutCompanyInput | PayrollCreateOrConnectWithoutCompanyInput[]
    upsert?: PayrollUpsertWithWhereUniqueWithoutCompanyInput | PayrollUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: PayrollCreateManyCompanyInputEnvelope
    set?: PayrollWhereUniqueInput | PayrollWhereUniqueInput[]
    disconnect?: PayrollWhereUniqueInput | PayrollWhereUniqueInput[]
    delete?: PayrollWhereUniqueInput | PayrollWhereUniqueInput[]
    connect?: PayrollWhereUniqueInput | PayrollWhereUniqueInput[]
    update?: PayrollUpdateWithWhereUniqueWithoutCompanyInput | PayrollUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: PayrollUpdateManyWithWhereWithoutCompanyInput | PayrollUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: PayrollScalarWhereInput | PayrollScalarWhereInput[]
  }

  export type OfferUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<OfferCreateWithoutCompanyInput, OfferUncheckedCreateWithoutCompanyInput> | OfferCreateWithoutCompanyInput[] | OfferUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: OfferCreateOrConnectWithoutCompanyInput | OfferCreateOrConnectWithoutCompanyInput[]
    upsert?: OfferUpsertWithWhereUniqueWithoutCompanyInput | OfferUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: OfferCreateManyCompanyInputEnvelope
    set?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    disconnect?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    delete?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    connect?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    update?: OfferUpdateWithWhereUniqueWithoutCompanyInput | OfferUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: OfferUpdateManyWithWhereWithoutCompanyInput | OfferUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: OfferScalarWhereInput | OfferScalarWhereInput[]
  }

  export type ContractUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<ContractCreateWithoutCompanyInput, ContractUncheckedCreateWithoutCompanyInput> | ContractCreateWithoutCompanyInput[] | ContractUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: ContractCreateOrConnectWithoutCompanyInput | ContractCreateOrConnectWithoutCompanyInput[]
    upsert?: ContractUpsertWithWhereUniqueWithoutCompanyInput | ContractUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: ContractCreateManyCompanyInputEnvelope
    set?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    disconnect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    delete?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    connect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    update?: ContractUpdateWithWhereUniqueWithoutCompanyInput | ContractUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: ContractUpdateManyWithWhereWithoutCompanyInput | ContractUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: ContractScalarWhereInput | ContractScalarWhereInput[]
  }

  export type CompanyCreateNestedOneWithoutUsersInput = {
    create?: XOR<CompanyCreateWithoutUsersInput, CompanyUncheckedCreateWithoutUsersInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutUsersInput
    connect?: CompanyWhereUniqueInput
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type CompanyUpdateOneWithoutUsersNestedInput = {
    create?: XOR<CompanyCreateWithoutUsersInput, CompanyUncheckedCreateWithoutUsersInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutUsersInput
    upsert?: CompanyUpsertWithoutUsersInput
    disconnect?: CompanyWhereInput | boolean
    delete?: CompanyWhereInput | boolean
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutUsersInput, CompanyUpdateWithoutUsersInput>, CompanyUncheckedUpdateWithoutUsersInput>
  }

  export type CompanyCreateNestedOneWithoutEmployeesInput = {
    create?: XOR<CompanyCreateWithoutEmployeesInput, CompanyUncheckedCreateWithoutEmployeesInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutEmployeesInput
    connect?: CompanyWhereUniqueInput
  }

  export type EmployeeCreateNestedOneWithoutDirectReportsInput = {
    create?: XOR<EmployeeCreateWithoutDirectReportsInput, EmployeeUncheckedCreateWithoutDirectReportsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutDirectReportsInput
    connect?: EmployeeWhereUniqueInput
  }

  export type EmployeeCreateNestedManyWithoutManagerInput = {
    create?: XOR<EmployeeCreateWithoutManagerInput, EmployeeUncheckedCreateWithoutManagerInput> | EmployeeCreateWithoutManagerInput[] | EmployeeUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutManagerInput | EmployeeCreateOrConnectWithoutManagerInput[]
    createMany?: EmployeeCreateManyManagerInputEnvelope
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
  }

  export type PayrollItemCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<PayrollItemCreateWithoutEmployeeInput, PayrollItemUncheckedCreateWithoutEmployeeInput> | PayrollItemCreateWithoutEmployeeInput[] | PayrollItemUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: PayrollItemCreateOrConnectWithoutEmployeeInput | PayrollItemCreateOrConnectWithoutEmployeeInput[]
    createMany?: PayrollItemCreateManyEmployeeInputEnvelope
    connect?: PayrollItemWhereUniqueInput | PayrollItemWhereUniqueInput[]
  }

  export type ContractCreateNestedOneWithoutEmployeeInput = {
    create?: XOR<ContractCreateWithoutEmployeeInput, ContractUncheckedCreateWithoutEmployeeInput>
    connectOrCreate?: ContractCreateOrConnectWithoutEmployeeInput
    connect?: ContractWhereUniqueInput
  }

  export type DocumentCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<DocumentCreateWithoutEmployeeInput, DocumentUncheckedCreateWithoutEmployeeInput> | DocumentCreateWithoutEmployeeInput[] | DocumentUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutEmployeeInput | DocumentCreateOrConnectWithoutEmployeeInput[]
    createMany?: DocumentCreateManyEmployeeInputEnvelope
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
  }

  export type EmployeeUncheckedCreateNestedManyWithoutManagerInput = {
    create?: XOR<EmployeeCreateWithoutManagerInput, EmployeeUncheckedCreateWithoutManagerInput> | EmployeeCreateWithoutManagerInput[] | EmployeeUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutManagerInput | EmployeeCreateOrConnectWithoutManagerInput[]
    createMany?: EmployeeCreateManyManagerInputEnvelope
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
  }

  export type PayrollItemUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<PayrollItemCreateWithoutEmployeeInput, PayrollItemUncheckedCreateWithoutEmployeeInput> | PayrollItemCreateWithoutEmployeeInput[] | PayrollItemUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: PayrollItemCreateOrConnectWithoutEmployeeInput | PayrollItemCreateOrConnectWithoutEmployeeInput[]
    createMany?: PayrollItemCreateManyEmployeeInputEnvelope
    connect?: PayrollItemWhereUniqueInput | PayrollItemWhereUniqueInput[]
  }

  export type ContractUncheckedCreateNestedOneWithoutEmployeeInput = {
    create?: XOR<ContractCreateWithoutEmployeeInput, ContractUncheckedCreateWithoutEmployeeInput>
    connectOrCreate?: ContractCreateOrConnectWithoutEmployeeInput
    connect?: ContractWhereUniqueInput
  }

  export type DocumentUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<DocumentCreateWithoutEmployeeInput, DocumentUncheckedCreateWithoutEmployeeInput> | DocumentCreateWithoutEmployeeInput[] | DocumentUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutEmployeeInput | DocumentCreateOrConnectWithoutEmployeeInput[]
    createMany?: DocumentCreateManyEmployeeInputEnvelope
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumEmployeeStatusFieldUpdateOperationsInput = {
    set?: $Enums.EmployeeStatus
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CompanyUpdateOneRequiredWithoutEmployeesNestedInput = {
    create?: XOR<CompanyCreateWithoutEmployeesInput, CompanyUncheckedCreateWithoutEmployeesInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutEmployeesInput
    upsert?: CompanyUpsertWithoutEmployeesInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutEmployeesInput, CompanyUpdateWithoutEmployeesInput>, CompanyUncheckedUpdateWithoutEmployeesInput>
  }

  export type EmployeeUpdateOneWithoutDirectReportsNestedInput = {
    create?: XOR<EmployeeCreateWithoutDirectReportsInput, EmployeeUncheckedCreateWithoutDirectReportsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutDirectReportsInput
    upsert?: EmployeeUpsertWithoutDirectReportsInput
    disconnect?: EmployeeWhereInput | boolean
    delete?: EmployeeWhereInput | boolean
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutDirectReportsInput, EmployeeUpdateWithoutDirectReportsInput>, EmployeeUncheckedUpdateWithoutDirectReportsInput>
  }

  export type EmployeeUpdateManyWithoutManagerNestedInput = {
    create?: XOR<EmployeeCreateWithoutManagerInput, EmployeeUncheckedCreateWithoutManagerInput> | EmployeeCreateWithoutManagerInput[] | EmployeeUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutManagerInput | EmployeeCreateOrConnectWithoutManagerInput[]
    upsert?: EmployeeUpsertWithWhereUniqueWithoutManagerInput | EmployeeUpsertWithWhereUniqueWithoutManagerInput[]
    createMany?: EmployeeCreateManyManagerInputEnvelope
    set?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    disconnect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    delete?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    update?: EmployeeUpdateWithWhereUniqueWithoutManagerInput | EmployeeUpdateWithWhereUniqueWithoutManagerInput[]
    updateMany?: EmployeeUpdateManyWithWhereWithoutManagerInput | EmployeeUpdateManyWithWhereWithoutManagerInput[]
    deleteMany?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
  }

  export type PayrollItemUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<PayrollItemCreateWithoutEmployeeInput, PayrollItemUncheckedCreateWithoutEmployeeInput> | PayrollItemCreateWithoutEmployeeInput[] | PayrollItemUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: PayrollItemCreateOrConnectWithoutEmployeeInput | PayrollItemCreateOrConnectWithoutEmployeeInput[]
    upsert?: PayrollItemUpsertWithWhereUniqueWithoutEmployeeInput | PayrollItemUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: PayrollItemCreateManyEmployeeInputEnvelope
    set?: PayrollItemWhereUniqueInput | PayrollItemWhereUniqueInput[]
    disconnect?: PayrollItemWhereUniqueInput | PayrollItemWhereUniqueInput[]
    delete?: PayrollItemWhereUniqueInput | PayrollItemWhereUniqueInput[]
    connect?: PayrollItemWhereUniqueInput | PayrollItemWhereUniqueInput[]
    update?: PayrollItemUpdateWithWhereUniqueWithoutEmployeeInput | PayrollItemUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: PayrollItemUpdateManyWithWhereWithoutEmployeeInput | PayrollItemUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: PayrollItemScalarWhereInput | PayrollItemScalarWhereInput[]
  }

  export type ContractUpdateOneWithoutEmployeeNestedInput = {
    create?: XOR<ContractCreateWithoutEmployeeInput, ContractUncheckedCreateWithoutEmployeeInput>
    connectOrCreate?: ContractCreateOrConnectWithoutEmployeeInput
    upsert?: ContractUpsertWithoutEmployeeInput
    disconnect?: ContractWhereInput | boolean
    delete?: ContractWhereInput | boolean
    connect?: ContractWhereUniqueInput
    update?: XOR<XOR<ContractUpdateToOneWithWhereWithoutEmployeeInput, ContractUpdateWithoutEmployeeInput>, ContractUncheckedUpdateWithoutEmployeeInput>
  }

  export type DocumentUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<DocumentCreateWithoutEmployeeInput, DocumentUncheckedCreateWithoutEmployeeInput> | DocumentCreateWithoutEmployeeInput[] | DocumentUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutEmployeeInput | DocumentCreateOrConnectWithoutEmployeeInput[]
    upsert?: DocumentUpsertWithWhereUniqueWithoutEmployeeInput | DocumentUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: DocumentCreateManyEmployeeInputEnvelope
    set?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    disconnect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    delete?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    update?: DocumentUpdateWithWhereUniqueWithoutEmployeeInput | DocumentUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: DocumentUpdateManyWithWhereWithoutEmployeeInput | DocumentUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
  }

  export type EmployeeUncheckedUpdateManyWithoutManagerNestedInput = {
    create?: XOR<EmployeeCreateWithoutManagerInput, EmployeeUncheckedCreateWithoutManagerInput> | EmployeeCreateWithoutManagerInput[] | EmployeeUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutManagerInput | EmployeeCreateOrConnectWithoutManagerInput[]
    upsert?: EmployeeUpsertWithWhereUniqueWithoutManagerInput | EmployeeUpsertWithWhereUniqueWithoutManagerInput[]
    createMany?: EmployeeCreateManyManagerInputEnvelope
    set?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    disconnect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    delete?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    update?: EmployeeUpdateWithWhereUniqueWithoutManagerInput | EmployeeUpdateWithWhereUniqueWithoutManagerInput[]
    updateMany?: EmployeeUpdateManyWithWhereWithoutManagerInput | EmployeeUpdateManyWithWhereWithoutManagerInput[]
    deleteMany?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
  }

  export type PayrollItemUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<PayrollItemCreateWithoutEmployeeInput, PayrollItemUncheckedCreateWithoutEmployeeInput> | PayrollItemCreateWithoutEmployeeInput[] | PayrollItemUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: PayrollItemCreateOrConnectWithoutEmployeeInput | PayrollItemCreateOrConnectWithoutEmployeeInput[]
    upsert?: PayrollItemUpsertWithWhereUniqueWithoutEmployeeInput | PayrollItemUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: PayrollItemCreateManyEmployeeInputEnvelope
    set?: PayrollItemWhereUniqueInput | PayrollItemWhereUniqueInput[]
    disconnect?: PayrollItemWhereUniqueInput | PayrollItemWhereUniqueInput[]
    delete?: PayrollItemWhereUniqueInput | PayrollItemWhereUniqueInput[]
    connect?: PayrollItemWhereUniqueInput | PayrollItemWhereUniqueInput[]
    update?: PayrollItemUpdateWithWhereUniqueWithoutEmployeeInput | PayrollItemUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: PayrollItemUpdateManyWithWhereWithoutEmployeeInput | PayrollItemUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: PayrollItemScalarWhereInput | PayrollItemScalarWhereInput[]
  }

  export type ContractUncheckedUpdateOneWithoutEmployeeNestedInput = {
    create?: XOR<ContractCreateWithoutEmployeeInput, ContractUncheckedCreateWithoutEmployeeInput>
    connectOrCreate?: ContractCreateOrConnectWithoutEmployeeInput
    upsert?: ContractUpsertWithoutEmployeeInput
    disconnect?: ContractWhereInput | boolean
    delete?: ContractWhereInput | boolean
    connect?: ContractWhereUniqueInput
    update?: XOR<XOR<ContractUpdateToOneWithWhereWithoutEmployeeInput, ContractUpdateWithoutEmployeeInput>, ContractUncheckedUpdateWithoutEmployeeInput>
  }

  export type DocumentUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<DocumentCreateWithoutEmployeeInput, DocumentUncheckedCreateWithoutEmployeeInput> | DocumentCreateWithoutEmployeeInput[] | DocumentUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutEmployeeInput | DocumentCreateOrConnectWithoutEmployeeInput[]
    upsert?: DocumentUpsertWithWhereUniqueWithoutEmployeeInput | DocumentUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: DocumentCreateManyEmployeeInputEnvelope
    set?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    disconnect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    delete?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    update?: DocumentUpdateWithWhereUniqueWithoutEmployeeInput | DocumentUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: DocumentUpdateManyWithWhereWithoutEmployeeInput | DocumentUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
  }

  export type CompanyCreateNestedOneWithoutPayrollsInput = {
    create?: XOR<CompanyCreateWithoutPayrollsInput, CompanyUncheckedCreateWithoutPayrollsInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutPayrollsInput
    connect?: CompanyWhereUniqueInput
  }

  export type PayrollItemCreateNestedManyWithoutPayrollInput = {
    create?: XOR<PayrollItemCreateWithoutPayrollInput, PayrollItemUncheckedCreateWithoutPayrollInput> | PayrollItemCreateWithoutPayrollInput[] | PayrollItemUncheckedCreateWithoutPayrollInput[]
    connectOrCreate?: PayrollItemCreateOrConnectWithoutPayrollInput | PayrollItemCreateOrConnectWithoutPayrollInput[]
    createMany?: PayrollItemCreateManyPayrollInputEnvelope
    connect?: PayrollItemWhereUniqueInput | PayrollItemWhereUniqueInput[]
  }

  export type PayrollItemUncheckedCreateNestedManyWithoutPayrollInput = {
    create?: XOR<PayrollItemCreateWithoutPayrollInput, PayrollItemUncheckedCreateWithoutPayrollInput> | PayrollItemCreateWithoutPayrollInput[] | PayrollItemUncheckedCreateWithoutPayrollInput[]
    connectOrCreate?: PayrollItemCreateOrConnectWithoutPayrollInput | PayrollItemCreateOrConnectWithoutPayrollInput[]
    createMany?: PayrollItemCreateManyPayrollInputEnvelope
    connect?: PayrollItemWhereUniqueInput | PayrollItemWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumPayrollStatusFieldUpdateOperationsInput = {
    set?: $Enums.PayrollStatus
  }

  export type CompanyUpdateOneRequiredWithoutPayrollsNestedInput = {
    create?: XOR<CompanyCreateWithoutPayrollsInput, CompanyUncheckedCreateWithoutPayrollsInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutPayrollsInput
    upsert?: CompanyUpsertWithoutPayrollsInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutPayrollsInput, CompanyUpdateWithoutPayrollsInput>, CompanyUncheckedUpdateWithoutPayrollsInput>
  }

  export type PayrollItemUpdateManyWithoutPayrollNestedInput = {
    create?: XOR<PayrollItemCreateWithoutPayrollInput, PayrollItemUncheckedCreateWithoutPayrollInput> | PayrollItemCreateWithoutPayrollInput[] | PayrollItemUncheckedCreateWithoutPayrollInput[]
    connectOrCreate?: PayrollItemCreateOrConnectWithoutPayrollInput | PayrollItemCreateOrConnectWithoutPayrollInput[]
    upsert?: PayrollItemUpsertWithWhereUniqueWithoutPayrollInput | PayrollItemUpsertWithWhereUniqueWithoutPayrollInput[]
    createMany?: PayrollItemCreateManyPayrollInputEnvelope
    set?: PayrollItemWhereUniqueInput | PayrollItemWhereUniqueInput[]
    disconnect?: PayrollItemWhereUniqueInput | PayrollItemWhereUniqueInput[]
    delete?: PayrollItemWhereUniqueInput | PayrollItemWhereUniqueInput[]
    connect?: PayrollItemWhereUniqueInput | PayrollItemWhereUniqueInput[]
    update?: PayrollItemUpdateWithWhereUniqueWithoutPayrollInput | PayrollItemUpdateWithWhereUniqueWithoutPayrollInput[]
    updateMany?: PayrollItemUpdateManyWithWhereWithoutPayrollInput | PayrollItemUpdateManyWithWhereWithoutPayrollInput[]
    deleteMany?: PayrollItemScalarWhereInput | PayrollItemScalarWhereInput[]
  }

  export type PayrollItemUncheckedUpdateManyWithoutPayrollNestedInput = {
    create?: XOR<PayrollItemCreateWithoutPayrollInput, PayrollItemUncheckedCreateWithoutPayrollInput> | PayrollItemCreateWithoutPayrollInput[] | PayrollItemUncheckedCreateWithoutPayrollInput[]
    connectOrCreate?: PayrollItemCreateOrConnectWithoutPayrollInput | PayrollItemCreateOrConnectWithoutPayrollInput[]
    upsert?: PayrollItemUpsertWithWhereUniqueWithoutPayrollInput | PayrollItemUpsertWithWhereUniqueWithoutPayrollInput[]
    createMany?: PayrollItemCreateManyPayrollInputEnvelope
    set?: PayrollItemWhereUniqueInput | PayrollItemWhereUniqueInput[]
    disconnect?: PayrollItemWhereUniqueInput | PayrollItemWhereUniqueInput[]
    delete?: PayrollItemWhereUniqueInput | PayrollItemWhereUniqueInput[]
    connect?: PayrollItemWhereUniqueInput | PayrollItemWhereUniqueInput[]
    update?: PayrollItemUpdateWithWhereUniqueWithoutPayrollInput | PayrollItemUpdateWithWhereUniqueWithoutPayrollInput[]
    updateMany?: PayrollItemUpdateManyWithWhereWithoutPayrollInput | PayrollItemUpdateManyWithWhereWithoutPayrollInput[]
    deleteMany?: PayrollItemScalarWhereInput | PayrollItemScalarWhereInput[]
  }

  export type PayrollCreateNestedOneWithoutItemsInput = {
    create?: XOR<PayrollCreateWithoutItemsInput, PayrollUncheckedCreateWithoutItemsInput>
    connectOrCreate?: PayrollCreateOrConnectWithoutItemsInput
    connect?: PayrollWhereUniqueInput
  }

  export type EmployeeCreateNestedOneWithoutPayrollItemsInput = {
    create?: XOR<EmployeeCreateWithoutPayrollItemsInput, EmployeeUncheckedCreateWithoutPayrollItemsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutPayrollItemsInput
    connect?: EmployeeWhereUniqueInput
  }

  export type EnumPayrollItemStatusFieldUpdateOperationsInput = {
    set?: $Enums.PayrollItemStatus
  }

  export type PayrollUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<PayrollCreateWithoutItemsInput, PayrollUncheckedCreateWithoutItemsInput>
    connectOrCreate?: PayrollCreateOrConnectWithoutItemsInput
    upsert?: PayrollUpsertWithoutItemsInput
    connect?: PayrollWhereUniqueInput
    update?: XOR<XOR<PayrollUpdateToOneWithWhereWithoutItemsInput, PayrollUpdateWithoutItemsInput>, PayrollUncheckedUpdateWithoutItemsInput>
  }

  export type EmployeeUpdateOneRequiredWithoutPayrollItemsNestedInput = {
    create?: XOR<EmployeeCreateWithoutPayrollItemsInput, EmployeeUncheckedCreateWithoutPayrollItemsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutPayrollItemsInput
    upsert?: EmployeeUpsertWithoutPayrollItemsInput
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutPayrollItemsInput, EmployeeUpdateWithoutPayrollItemsInput>, EmployeeUncheckedUpdateWithoutPayrollItemsInput>
  }

  export type CompanyCreateNestedOneWithoutOffersInput = {
    create?: XOR<CompanyCreateWithoutOffersInput, CompanyUncheckedCreateWithoutOffersInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutOffersInput
    connect?: CompanyWhereUniqueInput
  }

  export type ContractCreateNestedOneWithoutOfferInput = {
    create?: XOR<ContractCreateWithoutOfferInput, ContractUncheckedCreateWithoutOfferInput>
    connectOrCreate?: ContractCreateOrConnectWithoutOfferInput
    connect?: ContractWhereUniqueInput
  }

  export type ContractUncheckedCreateNestedOneWithoutOfferInput = {
    create?: XOR<ContractCreateWithoutOfferInput, ContractUncheckedCreateWithoutOfferInput>
    connectOrCreate?: ContractCreateOrConnectWithoutOfferInput
    connect?: ContractWhereUniqueInput
  }

  export type EnumOfferStatusFieldUpdateOperationsInput = {
    set?: $Enums.OfferStatus
  }

  export type CompanyUpdateOneRequiredWithoutOffersNestedInput = {
    create?: XOR<CompanyCreateWithoutOffersInput, CompanyUncheckedCreateWithoutOffersInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutOffersInput
    upsert?: CompanyUpsertWithoutOffersInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutOffersInput, CompanyUpdateWithoutOffersInput>, CompanyUncheckedUpdateWithoutOffersInput>
  }

  export type ContractUpdateOneWithoutOfferNestedInput = {
    create?: XOR<ContractCreateWithoutOfferInput, ContractUncheckedCreateWithoutOfferInput>
    connectOrCreate?: ContractCreateOrConnectWithoutOfferInput
    upsert?: ContractUpsertWithoutOfferInput
    disconnect?: ContractWhereInput | boolean
    delete?: ContractWhereInput | boolean
    connect?: ContractWhereUniqueInput
    update?: XOR<XOR<ContractUpdateToOneWithWhereWithoutOfferInput, ContractUpdateWithoutOfferInput>, ContractUncheckedUpdateWithoutOfferInput>
  }

  export type ContractUncheckedUpdateOneWithoutOfferNestedInput = {
    create?: XOR<ContractCreateWithoutOfferInput, ContractUncheckedCreateWithoutOfferInput>
    connectOrCreate?: ContractCreateOrConnectWithoutOfferInput
    upsert?: ContractUpsertWithoutOfferInput
    disconnect?: ContractWhereInput | boolean
    delete?: ContractWhereInput | boolean
    connect?: ContractWhereUniqueInput
    update?: XOR<XOR<ContractUpdateToOneWithWhereWithoutOfferInput, ContractUpdateWithoutOfferInput>, ContractUncheckedUpdateWithoutOfferInput>
  }

  export type CompanyCreateNestedOneWithoutContractsInput = {
    create?: XOR<CompanyCreateWithoutContractsInput, CompanyUncheckedCreateWithoutContractsInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutContractsInput
    connect?: CompanyWhereUniqueInput
  }

  export type OfferCreateNestedOneWithoutContractInput = {
    create?: XOR<OfferCreateWithoutContractInput, OfferUncheckedCreateWithoutContractInput>
    connectOrCreate?: OfferCreateOrConnectWithoutContractInput
    connect?: OfferWhereUniqueInput
  }

  export type EmployeeCreateNestedOneWithoutContractInput = {
    create?: XOR<EmployeeCreateWithoutContractInput, EmployeeUncheckedCreateWithoutContractInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutContractInput
    connect?: EmployeeWhereUniqueInput
  }

  export type EnumContractStatusFieldUpdateOperationsInput = {
    set?: $Enums.ContractStatus
  }

  export type CompanyUpdateOneRequiredWithoutContractsNestedInput = {
    create?: XOR<CompanyCreateWithoutContractsInput, CompanyUncheckedCreateWithoutContractsInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutContractsInput
    upsert?: CompanyUpsertWithoutContractsInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutContractsInput, CompanyUpdateWithoutContractsInput>, CompanyUncheckedUpdateWithoutContractsInput>
  }

  export type OfferUpdateOneWithoutContractNestedInput = {
    create?: XOR<OfferCreateWithoutContractInput, OfferUncheckedCreateWithoutContractInput>
    connectOrCreate?: OfferCreateOrConnectWithoutContractInput
    upsert?: OfferUpsertWithoutContractInput
    disconnect?: OfferWhereInput | boolean
    delete?: OfferWhereInput | boolean
    connect?: OfferWhereUniqueInput
    update?: XOR<XOR<OfferUpdateToOneWithWhereWithoutContractInput, OfferUpdateWithoutContractInput>, OfferUncheckedUpdateWithoutContractInput>
  }

  export type EmployeeUpdateOneWithoutContractNestedInput = {
    create?: XOR<EmployeeCreateWithoutContractInput, EmployeeUncheckedCreateWithoutContractInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutContractInput
    upsert?: EmployeeUpsertWithoutContractInput
    disconnect?: EmployeeWhereInput | boolean
    delete?: EmployeeWhereInput | boolean
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutContractInput, EmployeeUpdateWithoutContractInput>, EmployeeUncheckedUpdateWithoutContractInput>
  }

  export type EmployeeCreateNestedOneWithoutDocumentsInput = {
    create?: XOR<EmployeeCreateWithoutDocumentsInput, EmployeeUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutDocumentsInput
    connect?: EmployeeWhereUniqueInput
  }

  export type EnumDocumentStatusFieldUpdateOperationsInput = {
    set?: $Enums.DocumentStatus
  }

  export type EmployeeUpdateOneRequiredWithoutDocumentsNestedInput = {
    create?: XOR<EmployeeCreateWithoutDocumentsInput, EmployeeUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutDocumentsInput
    upsert?: EmployeeUpsertWithoutDocumentsInput
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutDocumentsInput, EmployeeUpdateWithoutDocumentsInput>, EmployeeUncheckedUpdateWithoutDocumentsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumCountryCodeFilter<$PrismaModel = never> = {
    equals?: $Enums.CountryCode | EnumCountryCodeFieldRefInput<$PrismaModel>
    in?: $Enums.CountryCode[] | ListEnumCountryCodeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CountryCode[] | ListEnumCountryCodeFieldRefInput<$PrismaModel>
    not?: NestedEnumCountryCodeFilter<$PrismaModel> | $Enums.CountryCode
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumCountryCodeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CountryCode | EnumCountryCodeFieldRefInput<$PrismaModel>
    in?: $Enums.CountryCode[] | ListEnumCountryCodeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CountryCode[] | ListEnumCountryCodeFieldRefInput<$PrismaModel>
    not?: NestedEnumCountryCodeWithAggregatesFilter<$PrismaModel> | $Enums.CountryCode
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCountryCodeFilter<$PrismaModel>
    _max?: NestedEnumCountryCodeFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumEmployeeStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EmployeeStatus | EnumEmployeeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EmployeeStatus[] | ListEnumEmployeeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmployeeStatus[] | ListEnumEmployeeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEmployeeStatusFilter<$PrismaModel> | $Enums.EmployeeStatus
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumEmployeeStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EmployeeStatus | EnumEmployeeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EmployeeStatus[] | ListEnumEmployeeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmployeeStatus[] | ListEnumEmployeeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEmployeeStatusWithAggregatesFilter<$PrismaModel> | $Enums.EmployeeStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEmployeeStatusFilter<$PrismaModel>
    _max?: NestedEnumEmployeeStatusFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumPayrollStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PayrollStatus | EnumPayrollStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PayrollStatus[] | ListEnumPayrollStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PayrollStatus[] | ListEnumPayrollStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPayrollStatusFilter<$PrismaModel> | $Enums.PayrollStatus
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedEnumPayrollStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PayrollStatus | EnumPayrollStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PayrollStatus[] | ListEnumPayrollStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PayrollStatus[] | ListEnumPayrollStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPayrollStatusWithAggregatesFilter<$PrismaModel> | $Enums.PayrollStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPayrollStatusFilter<$PrismaModel>
    _max?: NestedEnumPayrollStatusFilter<$PrismaModel>
  }

  export type NestedEnumPayrollItemStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PayrollItemStatus | EnumPayrollItemStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PayrollItemStatus[] | ListEnumPayrollItemStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PayrollItemStatus[] | ListEnumPayrollItemStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPayrollItemStatusFilter<$PrismaModel> | $Enums.PayrollItemStatus
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumPayrollItemStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PayrollItemStatus | EnumPayrollItemStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PayrollItemStatus[] | ListEnumPayrollItemStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PayrollItemStatus[] | ListEnumPayrollItemStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPayrollItemStatusWithAggregatesFilter<$PrismaModel> | $Enums.PayrollItemStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPayrollItemStatusFilter<$PrismaModel>
    _max?: NestedEnumPayrollItemStatusFilter<$PrismaModel>
  }

  export type NestedEnumOfferStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OfferStatus | EnumOfferStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OfferStatus[] | ListEnumOfferStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OfferStatus[] | ListEnumOfferStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOfferStatusFilter<$PrismaModel> | $Enums.OfferStatus
  }

  export type NestedEnumOfferStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OfferStatus | EnumOfferStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OfferStatus[] | ListEnumOfferStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OfferStatus[] | ListEnumOfferStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOfferStatusWithAggregatesFilter<$PrismaModel> | $Enums.OfferStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOfferStatusFilter<$PrismaModel>
    _max?: NestedEnumOfferStatusFilter<$PrismaModel>
  }

  export type NestedEnumContractStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ContractStatus | EnumContractStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ContractStatus[] | ListEnumContractStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContractStatus[] | ListEnumContractStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumContractStatusFilter<$PrismaModel> | $Enums.ContractStatus
  }

  export type NestedEnumContractStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ContractStatus | EnumContractStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ContractStatus[] | ListEnumContractStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContractStatus[] | ListEnumContractStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumContractStatusWithAggregatesFilter<$PrismaModel> | $Enums.ContractStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumContractStatusFilter<$PrismaModel>
    _max?: NestedEnumContractStatusFilter<$PrismaModel>
  }

  export type NestedEnumDocumentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentStatus | EnumDocumentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DocumentStatus[] | ListEnumDocumentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DocumentStatus[] | ListEnumDocumentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDocumentStatusFilter<$PrismaModel> | $Enums.DocumentStatus
  }

  export type NestedEnumDocumentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentStatus | EnumDocumentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DocumentStatus[] | ListEnumDocumentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DocumentStatus[] | ListEnumDocumentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDocumentStatusWithAggregatesFilter<$PrismaModel> | $Enums.DocumentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDocumentStatusFilter<$PrismaModel>
    _max?: NestedEnumDocumentStatusFilter<$PrismaModel>
  }

  export type UserCreateWithoutCompanyInput = {
    id?: string
    email: string
    passwordHash: string
    firstName: string
    lastName: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutCompanyInput = {
    id?: string
    email: string
    passwordHash: string
    firstName: string
    lastName: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutCompanyInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput>
  }

  export type UserCreateManyCompanyInputEnvelope = {
    data: UserCreateManyCompanyInput | UserCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type EmployeeCreateWithoutCompanyInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    workEmail?: string | null
    dateOfJoin?: Date | string | null
    status?: $Enums.EmployeeStatus
    country: $Enums.CountryCode
    baseSalary?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    manager?: EmployeeCreateNestedOneWithoutDirectReportsInput
    directReports?: EmployeeCreateNestedManyWithoutManagerInput
    payrollItems?: PayrollItemCreateNestedManyWithoutEmployeeInput
    contract?: ContractCreateNestedOneWithoutEmployeeInput
    documents?: DocumentCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateWithoutCompanyInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    workEmail?: string | null
    dateOfJoin?: Date | string | null
    status?: $Enums.EmployeeStatus
    country: $Enums.CountryCode
    baseSalary?: number
    managerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    directReports?: EmployeeUncheckedCreateNestedManyWithoutManagerInput
    payrollItems?: PayrollItemUncheckedCreateNestedManyWithoutEmployeeInput
    contract?: ContractUncheckedCreateNestedOneWithoutEmployeeInput
    documents?: DocumentUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeCreateOrConnectWithoutCompanyInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutCompanyInput, EmployeeUncheckedCreateWithoutCompanyInput>
  }

  export type EmployeeCreateManyCompanyInputEnvelope = {
    data: EmployeeCreateManyCompanyInput | EmployeeCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type PayrollCreateWithoutCompanyInput = {
    id?: string
    month: number
    year: number
    status?: $Enums.PayrollStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: PayrollItemCreateNestedManyWithoutPayrollInput
  }

  export type PayrollUncheckedCreateWithoutCompanyInput = {
    id?: string
    month: number
    year: number
    status?: $Enums.PayrollStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: PayrollItemUncheckedCreateNestedManyWithoutPayrollInput
  }

  export type PayrollCreateOrConnectWithoutCompanyInput = {
    where: PayrollWhereUniqueInput
    create: XOR<PayrollCreateWithoutCompanyInput, PayrollUncheckedCreateWithoutCompanyInput>
  }

  export type PayrollCreateManyCompanyInputEnvelope = {
    data: PayrollCreateManyCompanyInput | PayrollCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type OfferCreateWithoutCompanyInput = {
    id?: string
    candidateName: string
    candidateEmail: string
    jobTitle: string
    country: $Enums.CountryCode
    salary: number
    status?: $Enums.OfferStatus
    validUntil?: Date | string | null
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    contract?: ContractCreateNestedOneWithoutOfferInput
  }

  export type OfferUncheckedCreateWithoutCompanyInput = {
    id?: string
    candidateName: string
    candidateEmail: string
    jobTitle: string
    country: $Enums.CountryCode
    salary: number
    status?: $Enums.OfferStatus
    validUntil?: Date | string | null
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    contract?: ContractUncheckedCreateNestedOneWithoutOfferInput
  }

  export type OfferCreateOrConnectWithoutCompanyInput = {
    where: OfferWhereUniqueInput
    create: XOR<OfferCreateWithoutCompanyInput, OfferUncheckedCreateWithoutCompanyInput>
  }

  export type OfferCreateManyCompanyInputEnvelope = {
    data: OfferCreateManyCompanyInput | OfferCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type ContractCreateWithoutCompanyInput = {
    id?: string
    status?: $Enums.ContractStatus
    content?: string | null
    legalTerms?: NullableJsonNullValueInput | InputJsonValue
    signedAt?: Date | string | null
    validFrom?: Date | string | null
    validUntil?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    offer?: OfferCreateNestedOneWithoutContractInput
    employee?: EmployeeCreateNestedOneWithoutContractInput
  }

  export type ContractUncheckedCreateWithoutCompanyInput = {
    id?: string
    offerId?: string | null
    employeeId?: string | null
    status?: $Enums.ContractStatus
    content?: string | null
    legalTerms?: NullableJsonNullValueInput | InputJsonValue
    signedAt?: Date | string | null
    validFrom?: Date | string | null
    validUntil?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContractCreateOrConnectWithoutCompanyInput = {
    where: ContractWhereUniqueInput
    create: XOR<ContractCreateWithoutCompanyInput, ContractUncheckedCreateWithoutCompanyInput>
  }

  export type ContractCreateManyCompanyInputEnvelope = {
    data: ContractCreateManyCompanyInput | ContractCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutCompanyInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutCompanyInput, UserUncheckedUpdateWithoutCompanyInput>
    create: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput>
  }

  export type UserUpdateWithWhereUniqueWithoutCompanyInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutCompanyInput, UserUncheckedUpdateWithoutCompanyInput>
  }

  export type UserUpdateManyWithWhereWithoutCompanyInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutCompanyInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    companyId?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type EmployeeUpsertWithWhereUniqueWithoutCompanyInput = {
    where: EmployeeWhereUniqueInput
    update: XOR<EmployeeUpdateWithoutCompanyInput, EmployeeUncheckedUpdateWithoutCompanyInput>
    create: XOR<EmployeeCreateWithoutCompanyInput, EmployeeUncheckedCreateWithoutCompanyInput>
  }

  export type EmployeeUpdateWithWhereUniqueWithoutCompanyInput = {
    where: EmployeeWhereUniqueInput
    data: XOR<EmployeeUpdateWithoutCompanyInput, EmployeeUncheckedUpdateWithoutCompanyInput>
  }

  export type EmployeeUpdateManyWithWhereWithoutCompanyInput = {
    where: EmployeeScalarWhereInput
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyWithoutCompanyInput>
  }

  export type EmployeeScalarWhereInput = {
    AND?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
    OR?: EmployeeScalarWhereInput[]
    NOT?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
    id?: StringFilter<"Employee"> | string
    firstName?: StringFilter<"Employee"> | string
    lastName?: StringFilter<"Employee"> | string
    email?: StringFilter<"Employee"> | string
    workEmail?: StringNullableFilter<"Employee"> | string | null
    dateOfJoin?: DateTimeNullableFilter<"Employee"> | Date | string | null
    status?: EnumEmployeeStatusFilter<"Employee"> | $Enums.EmployeeStatus
    companyId?: StringFilter<"Employee"> | string
    country?: EnumCountryCodeFilter<"Employee"> | $Enums.CountryCode
    baseSalary?: FloatFilter<"Employee"> | number
    managerId?: StringNullableFilter<"Employee"> | string | null
    createdAt?: DateTimeFilter<"Employee"> | Date | string
    updatedAt?: DateTimeFilter<"Employee"> | Date | string
  }

  export type PayrollUpsertWithWhereUniqueWithoutCompanyInput = {
    where: PayrollWhereUniqueInput
    update: XOR<PayrollUpdateWithoutCompanyInput, PayrollUncheckedUpdateWithoutCompanyInput>
    create: XOR<PayrollCreateWithoutCompanyInput, PayrollUncheckedCreateWithoutCompanyInput>
  }

  export type PayrollUpdateWithWhereUniqueWithoutCompanyInput = {
    where: PayrollWhereUniqueInput
    data: XOR<PayrollUpdateWithoutCompanyInput, PayrollUncheckedUpdateWithoutCompanyInput>
  }

  export type PayrollUpdateManyWithWhereWithoutCompanyInput = {
    where: PayrollScalarWhereInput
    data: XOR<PayrollUpdateManyMutationInput, PayrollUncheckedUpdateManyWithoutCompanyInput>
  }

  export type PayrollScalarWhereInput = {
    AND?: PayrollScalarWhereInput | PayrollScalarWhereInput[]
    OR?: PayrollScalarWhereInput[]
    NOT?: PayrollScalarWhereInput | PayrollScalarWhereInput[]
    id?: StringFilter<"Payroll"> | string
    companyId?: StringFilter<"Payroll"> | string
    month?: IntFilter<"Payroll"> | number
    year?: IntFilter<"Payroll"> | number
    status?: EnumPayrollStatusFilter<"Payroll"> | $Enums.PayrollStatus
    createdAt?: DateTimeFilter<"Payroll"> | Date | string
    updatedAt?: DateTimeFilter<"Payroll"> | Date | string
  }

  export type OfferUpsertWithWhereUniqueWithoutCompanyInput = {
    where: OfferWhereUniqueInput
    update: XOR<OfferUpdateWithoutCompanyInput, OfferUncheckedUpdateWithoutCompanyInput>
    create: XOR<OfferCreateWithoutCompanyInput, OfferUncheckedCreateWithoutCompanyInput>
  }

  export type OfferUpdateWithWhereUniqueWithoutCompanyInput = {
    where: OfferWhereUniqueInput
    data: XOR<OfferUpdateWithoutCompanyInput, OfferUncheckedUpdateWithoutCompanyInput>
  }

  export type OfferUpdateManyWithWhereWithoutCompanyInput = {
    where: OfferScalarWhereInput
    data: XOR<OfferUpdateManyMutationInput, OfferUncheckedUpdateManyWithoutCompanyInput>
  }

  export type OfferScalarWhereInput = {
    AND?: OfferScalarWhereInput | OfferScalarWhereInput[]
    OR?: OfferScalarWhereInput[]
    NOT?: OfferScalarWhereInput | OfferScalarWhereInput[]
    id?: StringFilter<"Offer"> | string
    companyId?: StringFilter<"Offer"> | string
    candidateName?: StringFilter<"Offer"> | string
    candidateEmail?: StringFilter<"Offer"> | string
    jobTitle?: StringFilter<"Offer"> | string
    country?: EnumCountryCodeFilter<"Offer"> | $Enums.CountryCode
    salary?: FloatFilter<"Offer"> | number
    status?: EnumOfferStatusFilter<"Offer"> | $Enums.OfferStatus
    validUntil?: DateTimeNullableFilter<"Offer"> | Date | string | null
    details?: JsonNullableFilter<"Offer">
    createdAt?: DateTimeFilter<"Offer"> | Date | string
    updatedAt?: DateTimeFilter<"Offer"> | Date | string
  }

  export type ContractUpsertWithWhereUniqueWithoutCompanyInput = {
    where: ContractWhereUniqueInput
    update: XOR<ContractUpdateWithoutCompanyInput, ContractUncheckedUpdateWithoutCompanyInput>
    create: XOR<ContractCreateWithoutCompanyInput, ContractUncheckedCreateWithoutCompanyInput>
  }

  export type ContractUpdateWithWhereUniqueWithoutCompanyInput = {
    where: ContractWhereUniqueInput
    data: XOR<ContractUpdateWithoutCompanyInput, ContractUncheckedUpdateWithoutCompanyInput>
  }

  export type ContractUpdateManyWithWhereWithoutCompanyInput = {
    where: ContractScalarWhereInput
    data: XOR<ContractUpdateManyMutationInput, ContractUncheckedUpdateManyWithoutCompanyInput>
  }

  export type ContractScalarWhereInput = {
    AND?: ContractScalarWhereInput | ContractScalarWhereInput[]
    OR?: ContractScalarWhereInput[]
    NOT?: ContractScalarWhereInput | ContractScalarWhereInput[]
    id?: StringFilter<"Contract"> | string
    companyId?: StringFilter<"Contract"> | string
    offerId?: StringNullableFilter<"Contract"> | string | null
    employeeId?: StringNullableFilter<"Contract"> | string | null
    status?: EnumContractStatusFilter<"Contract"> | $Enums.ContractStatus
    content?: StringNullableFilter<"Contract"> | string | null
    legalTerms?: JsonNullableFilter<"Contract">
    signedAt?: DateTimeNullableFilter<"Contract"> | Date | string | null
    validFrom?: DateTimeNullableFilter<"Contract"> | Date | string | null
    validUntil?: DateTimeNullableFilter<"Contract"> | Date | string | null
    createdAt?: DateTimeFilter<"Contract"> | Date | string
    updatedAt?: DateTimeFilter<"Contract"> | Date | string
  }

  export type CompanyCreateWithoutUsersInput = {
    id?: string
    name: string
    legalName?: string | null
    hqCountry: $Enums.CountryCode
    taxId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    employees?: EmployeeCreateNestedManyWithoutCompanyInput
    payrolls?: PayrollCreateNestedManyWithoutCompanyInput
    offers?: OfferCreateNestedManyWithoutCompanyInput
    contracts?: ContractCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    legalName?: string | null
    hqCountry: $Enums.CountryCode
    taxId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    employees?: EmployeeUncheckedCreateNestedManyWithoutCompanyInput
    payrolls?: PayrollUncheckedCreateNestedManyWithoutCompanyInput
    offers?: OfferUncheckedCreateNestedManyWithoutCompanyInput
    contracts?: ContractUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutUsersInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutUsersInput, CompanyUncheckedCreateWithoutUsersInput>
  }

  export type CompanyUpsertWithoutUsersInput = {
    update: XOR<CompanyUpdateWithoutUsersInput, CompanyUncheckedUpdateWithoutUsersInput>
    create: XOR<CompanyCreateWithoutUsersInput, CompanyUncheckedCreateWithoutUsersInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutUsersInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutUsersInput, CompanyUncheckedUpdateWithoutUsersInput>
  }

  export type CompanyUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    legalName?: NullableStringFieldUpdateOperationsInput | string | null
    hqCountry?: EnumCountryCodeFieldUpdateOperationsInput | $Enums.CountryCode
    taxId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employees?: EmployeeUpdateManyWithoutCompanyNestedInput
    payrolls?: PayrollUpdateManyWithoutCompanyNestedInput
    offers?: OfferUpdateManyWithoutCompanyNestedInput
    contracts?: ContractUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    legalName?: NullableStringFieldUpdateOperationsInput | string | null
    hqCountry?: EnumCountryCodeFieldUpdateOperationsInput | $Enums.CountryCode
    taxId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employees?: EmployeeUncheckedUpdateManyWithoutCompanyNestedInput
    payrolls?: PayrollUncheckedUpdateManyWithoutCompanyNestedInput
    offers?: OfferUncheckedUpdateManyWithoutCompanyNestedInput
    contracts?: ContractUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyCreateWithoutEmployeesInput = {
    id?: string
    name: string
    legalName?: string | null
    hqCountry: $Enums.CountryCode
    taxId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutCompanyInput
    payrolls?: PayrollCreateNestedManyWithoutCompanyInput
    offers?: OfferCreateNestedManyWithoutCompanyInput
    contracts?: ContractCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutEmployeesInput = {
    id?: string
    name: string
    legalName?: string | null
    hqCountry: $Enums.CountryCode
    taxId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutCompanyInput
    payrolls?: PayrollUncheckedCreateNestedManyWithoutCompanyInput
    offers?: OfferUncheckedCreateNestedManyWithoutCompanyInput
    contracts?: ContractUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutEmployeesInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutEmployeesInput, CompanyUncheckedCreateWithoutEmployeesInput>
  }

  export type EmployeeCreateWithoutDirectReportsInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    workEmail?: string | null
    dateOfJoin?: Date | string | null
    status?: $Enums.EmployeeStatus
    country: $Enums.CountryCode
    baseSalary?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    company: CompanyCreateNestedOneWithoutEmployeesInput
    manager?: EmployeeCreateNestedOneWithoutDirectReportsInput
    payrollItems?: PayrollItemCreateNestedManyWithoutEmployeeInput
    contract?: ContractCreateNestedOneWithoutEmployeeInput
    documents?: DocumentCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateWithoutDirectReportsInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    workEmail?: string | null
    dateOfJoin?: Date | string | null
    status?: $Enums.EmployeeStatus
    companyId: string
    country: $Enums.CountryCode
    baseSalary?: number
    managerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payrollItems?: PayrollItemUncheckedCreateNestedManyWithoutEmployeeInput
    contract?: ContractUncheckedCreateNestedOneWithoutEmployeeInput
    documents?: DocumentUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeCreateOrConnectWithoutDirectReportsInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutDirectReportsInput, EmployeeUncheckedCreateWithoutDirectReportsInput>
  }

  export type EmployeeCreateWithoutManagerInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    workEmail?: string | null
    dateOfJoin?: Date | string | null
    status?: $Enums.EmployeeStatus
    country: $Enums.CountryCode
    baseSalary?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    company: CompanyCreateNestedOneWithoutEmployeesInput
    directReports?: EmployeeCreateNestedManyWithoutManagerInput
    payrollItems?: PayrollItemCreateNestedManyWithoutEmployeeInput
    contract?: ContractCreateNestedOneWithoutEmployeeInput
    documents?: DocumentCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateWithoutManagerInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    workEmail?: string | null
    dateOfJoin?: Date | string | null
    status?: $Enums.EmployeeStatus
    companyId: string
    country: $Enums.CountryCode
    baseSalary?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    directReports?: EmployeeUncheckedCreateNestedManyWithoutManagerInput
    payrollItems?: PayrollItemUncheckedCreateNestedManyWithoutEmployeeInput
    contract?: ContractUncheckedCreateNestedOneWithoutEmployeeInput
    documents?: DocumentUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeCreateOrConnectWithoutManagerInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutManagerInput, EmployeeUncheckedCreateWithoutManagerInput>
  }

  export type EmployeeCreateManyManagerInputEnvelope = {
    data: EmployeeCreateManyManagerInput | EmployeeCreateManyManagerInput[]
    skipDuplicates?: boolean
  }

  export type PayrollItemCreateWithoutEmployeeInput = {
    id?: string
    grossSalary: number
    netSalary: number
    totalDeductions: number
    totalContributions: number
    details: JsonNullValueInput | InputJsonValue
    status?: $Enums.PayrollItemStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    payroll: PayrollCreateNestedOneWithoutItemsInput
  }

  export type PayrollItemUncheckedCreateWithoutEmployeeInput = {
    id?: string
    payrollId: string
    grossSalary: number
    netSalary: number
    totalDeductions: number
    totalContributions: number
    details: JsonNullValueInput | InputJsonValue
    status?: $Enums.PayrollItemStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PayrollItemCreateOrConnectWithoutEmployeeInput = {
    where: PayrollItemWhereUniqueInput
    create: XOR<PayrollItemCreateWithoutEmployeeInput, PayrollItemUncheckedCreateWithoutEmployeeInput>
  }

  export type PayrollItemCreateManyEmployeeInputEnvelope = {
    data: PayrollItemCreateManyEmployeeInput | PayrollItemCreateManyEmployeeInput[]
    skipDuplicates?: boolean
  }

  export type ContractCreateWithoutEmployeeInput = {
    id?: string
    status?: $Enums.ContractStatus
    content?: string | null
    legalTerms?: NullableJsonNullValueInput | InputJsonValue
    signedAt?: Date | string | null
    validFrom?: Date | string | null
    validUntil?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    company: CompanyCreateNestedOneWithoutContractsInput
    offer?: OfferCreateNestedOneWithoutContractInput
  }

  export type ContractUncheckedCreateWithoutEmployeeInput = {
    id?: string
    companyId: string
    offerId?: string | null
    status?: $Enums.ContractStatus
    content?: string | null
    legalTerms?: NullableJsonNullValueInput | InputJsonValue
    signedAt?: Date | string | null
    validFrom?: Date | string | null
    validUntil?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContractCreateOrConnectWithoutEmployeeInput = {
    where: ContractWhereUniqueInput
    create: XOR<ContractCreateWithoutEmployeeInput, ContractUncheckedCreateWithoutEmployeeInput>
  }

  export type DocumentCreateWithoutEmployeeInput = {
    id?: string
    name: string
    type: string
    url?: string | null
    status?: $Enums.DocumentStatus
    meta?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DocumentUncheckedCreateWithoutEmployeeInput = {
    id?: string
    name: string
    type: string
    url?: string | null
    status?: $Enums.DocumentStatus
    meta?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DocumentCreateOrConnectWithoutEmployeeInput = {
    where: DocumentWhereUniqueInput
    create: XOR<DocumentCreateWithoutEmployeeInput, DocumentUncheckedCreateWithoutEmployeeInput>
  }

  export type DocumentCreateManyEmployeeInputEnvelope = {
    data: DocumentCreateManyEmployeeInput | DocumentCreateManyEmployeeInput[]
    skipDuplicates?: boolean
  }

  export type CompanyUpsertWithoutEmployeesInput = {
    update: XOR<CompanyUpdateWithoutEmployeesInput, CompanyUncheckedUpdateWithoutEmployeesInput>
    create: XOR<CompanyCreateWithoutEmployeesInput, CompanyUncheckedCreateWithoutEmployeesInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutEmployeesInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutEmployeesInput, CompanyUncheckedUpdateWithoutEmployeesInput>
  }

  export type CompanyUpdateWithoutEmployeesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    legalName?: NullableStringFieldUpdateOperationsInput | string | null
    hqCountry?: EnumCountryCodeFieldUpdateOperationsInput | $Enums.CountryCode
    taxId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutCompanyNestedInput
    payrolls?: PayrollUpdateManyWithoutCompanyNestedInput
    offers?: OfferUpdateManyWithoutCompanyNestedInput
    contracts?: ContractUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutEmployeesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    legalName?: NullableStringFieldUpdateOperationsInput | string | null
    hqCountry?: EnumCountryCodeFieldUpdateOperationsInput | $Enums.CountryCode
    taxId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutCompanyNestedInput
    payrolls?: PayrollUncheckedUpdateManyWithoutCompanyNestedInput
    offers?: OfferUncheckedUpdateManyWithoutCompanyNestedInput
    contracts?: ContractUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type EmployeeUpsertWithoutDirectReportsInput = {
    update: XOR<EmployeeUpdateWithoutDirectReportsInput, EmployeeUncheckedUpdateWithoutDirectReportsInput>
    create: XOR<EmployeeCreateWithoutDirectReportsInput, EmployeeUncheckedCreateWithoutDirectReportsInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutDirectReportsInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutDirectReportsInput, EmployeeUncheckedUpdateWithoutDirectReportsInput>
  }

  export type EmployeeUpdateWithoutDirectReportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    workEmail?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfJoin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumEmployeeStatusFieldUpdateOperationsInput | $Enums.EmployeeStatus
    country?: EnumCountryCodeFieldUpdateOperationsInput | $Enums.CountryCode
    baseSalary?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutEmployeesNestedInput
    manager?: EmployeeUpdateOneWithoutDirectReportsNestedInput
    payrollItems?: PayrollItemUpdateManyWithoutEmployeeNestedInput
    contract?: ContractUpdateOneWithoutEmployeeNestedInput
    documents?: DocumentUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutDirectReportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    workEmail?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfJoin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumEmployeeStatusFieldUpdateOperationsInput | $Enums.EmployeeStatus
    companyId?: StringFieldUpdateOperationsInput | string
    country?: EnumCountryCodeFieldUpdateOperationsInput | $Enums.CountryCode
    baseSalary?: FloatFieldUpdateOperationsInput | number
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payrollItems?: PayrollItemUncheckedUpdateManyWithoutEmployeeNestedInput
    contract?: ContractUncheckedUpdateOneWithoutEmployeeNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUpsertWithWhereUniqueWithoutManagerInput = {
    where: EmployeeWhereUniqueInput
    update: XOR<EmployeeUpdateWithoutManagerInput, EmployeeUncheckedUpdateWithoutManagerInput>
    create: XOR<EmployeeCreateWithoutManagerInput, EmployeeUncheckedCreateWithoutManagerInput>
  }

  export type EmployeeUpdateWithWhereUniqueWithoutManagerInput = {
    where: EmployeeWhereUniqueInput
    data: XOR<EmployeeUpdateWithoutManagerInput, EmployeeUncheckedUpdateWithoutManagerInput>
  }

  export type EmployeeUpdateManyWithWhereWithoutManagerInput = {
    where: EmployeeScalarWhereInput
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyWithoutManagerInput>
  }

  export type PayrollItemUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: PayrollItemWhereUniqueInput
    update: XOR<PayrollItemUpdateWithoutEmployeeInput, PayrollItemUncheckedUpdateWithoutEmployeeInput>
    create: XOR<PayrollItemCreateWithoutEmployeeInput, PayrollItemUncheckedCreateWithoutEmployeeInput>
  }

  export type PayrollItemUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: PayrollItemWhereUniqueInput
    data: XOR<PayrollItemUpdateWithoutEmployeeInput, PayrollItemUncheckedUpdateWithoutEmployeeInput>
  }

  export type PayrollItemUpdateManyWithWhereWithoutEmployeeInput = {
    where: PayrollItemScalarWhereInput
    data: XOR<PayrollItemUpdateManyMutationInput, PayrollItemUncheckedUpdateManyWithoutEmployeeInput>
  }

  export type PayrollItemScalarWhereInput = {
    AND?: PayrollItemScalarWhereInput | PayrollItemScalarWhereInput[]
    OR?: PayrollItemScalarWhereInput[]
    NOT?: PayrollItemScalarWhereInput | PayrollItemScalarWhereInput[]
    id?: StringFilter<"PayrollItem"> | string
    payrollId?: StringFilter<"PayrollItem"> | string
    employeeId?: StringFilter<"PayrollItem"> | string
    grossSalary?: FloatFilter<"PayrollItem"> | number
    netSalary?: FloatFilter<"PayrollItem"> | number
    totalDeductions?: FloatFilter<"PayrollItem"> | number
    totalContributions?: FloatFilter<"PayrollItem"> | number
    details?: JsonFilter<"PayrollItem">
    status?: EnumPayrollItemStatusFilter<"PayrollItem"> | $Enums.PayrollItemStatus
    createdAt?: DateTimeFilter<"PayrollItem"> | Date | string
    updatedAt?: DateTimeFilter<"PayrollItem"> | Date | string
  }

  export type ContractUpsertWithoutEmployeeInput = {
    update: XOR<ContractUpdateWithoutEmployeeInput, ContractUncheckedUpdateWithoutEmployeeInput>
    create: XOR<ContractCreateWithoutEmployeeInput, ContractUncheckedCreateWithoutEmployeeInput>
    where?: ContractWhereInput
  }

  export type ContractUpdateToOneWithWhereWithoutEmployeeInput = {
    where?: ContractWhereInput
    data: XOR<ContractUpdateWithoutEmployeeInput, ContractUncheckedUpdateWithoutEmployeeInput>
  }

  export type ContractUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumContractStatusFieldUpdateOperationsInput | $Enums.ContractStatus
    content?: NullableStringFieldUpdateOperationsInput | string | null
    legalTerms?: NullableJsonNullValueInput | InputJsonValue
    signedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    validFrom?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    validUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutContractsNestedInput
    offer?: OfferUpdateOneWithoutContractNestedInput
  }

  export type ContractUncheckedUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    offerId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumContractStatusFieldUpdateOperationsInput | $Enums.ContractStatus
    content?: NullableStringFieldUpdateOperationsInput | string | null
    legalTerms?: NullableJsonNullValueInput | InputJsonValue
    signedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    validFrom?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    validUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: DocumentWhereUniqueInput
    update: XOR<DocumentUpdateWithoutEmployeeInput, DocumentUncheckedUpdateWithoutEmployeeInput>
    create: XOR<DocumentCreateWithoutEmployeeInput, DocumentUncheckedCreateWithoutEmployeeInput>
  }

  export type DocumentUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: DocumentWhereUniqueInput
    data: XOR<DocumentUpdateWithoutEmployeeInput, DocumentUncheckedUpdateWithoutEmployeeInput>
  }

  export type DocumentUpdateManyWithWhereWithoutEmployeeInput = {
    where: DocumentScalarWhereInput
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyWithoutEmployeeInput>
  }

  export type DocumentScalarWhereInput = {
    AND?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
    OR?: DocumentScalarWhereInput[]
    NOT?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
    id?: StringFilter<"Document"> | string
    name?: StringFilter<"Document"> | string
    type?: StringFilter<"Document"> | string
    url?: StringNullableFilter<"Document"> | string | null
    status?: EnumDocumentStatusFilter<"Document"> | $Enums.DocumentStatus
    employeeId?: StringFilter<"Document"> | string
    meta?: JsonNullableFilter<"Document">
    createdAt?: DateTimeFilter<"Document"> | Date | string
    updatedAt?: DateTimeFilter<"Document"> | Date | string
  }

  export type CompanyCreateWithoutPayrollsInput = {
    id?: string
    name: string
    legalName?: string | null
    hqCountry: $Enums.CountryCode
    taxId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutCompanyInput
    employees?: EmployeeCreateNestedManyWithoutCompanyInput
    offers?: OfferCreateNestedManyWithoutCompanyInput
    contracts?: ContractCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutPayrollsInput = {
    id?: string
    name: string
    legalName?: string | null
    hqCountry: $Enums.CountryCode
    taxId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutCompanyInput
    employees?: EmployeeUncheckedCreateNestedManyWithoutCompanyInput
    offers?: OfferUncheckedCreateNestedManyWithoutCompanyInput
    contracts?: ContractUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutPayrollsInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutPayrollsInput, CompanyUncheckedCreateWithoutPayrollsInput>
  }

  export type PayrollItemCreateWithoutPayrollInput = {
    id?: string
    grossSalary: number
    netSalary: number
    totalDeductions: number
    totalContributions: number
    details: JsonNullValueInput | InputJsonValue
    status?: $Enums.PayrollItemStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    employee: EmployeeCreateNestedOneWithoutPayrollItemsInput
  }

  export type PayrollItemUncheckedCreateWithoutPayrollInput = {
    id?: string
    employeeId: string
    grossSalary: number
    netSalary: number
    totalDeductions: number
    totalContributions: number
    details: JsonNullValueInput | InputJsonValue
    status?: $Enums.PayrollItemStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PayrollItemCreateOrConnectWithoutPayrollInput = {
    where: PayrollItemWhereUniqueInput
    create: XOR<PayrollItemCreateWithoutPayrollInput, PayrollItemUncheckedCreateWithoutPayrollInput>
  }

  export type PayrollItemCreateManyPayrollInputEnvelope = {
    data: PayrollItemCreateManyPayrollInput | PayrollItemCreateManyPayrollInput[]
    skipDuplicates?: boolean
  }

  export type CompanyUpsertWithoutPayrollsInput = {
    update: XOR<CompanyUpdateWithoutPayrollsInput, CompanyUncheckedUpdateWithoutPayrollsInput>
    create: XOR<CompanyCreateWithoutPayrollsInput, CompanyUncheckedCreateWithoutPayrollsInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutPayrollsInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutPayrollsInput, CompanyUncheckedUpdateWithoutPayrollsInput>
  }

  export type CompanyUpdateWithoutPayrollsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    legalName?: NullableStringFieldUpdateOperationsInput | string | null
    hqCountry?: EnumCountryCodeFieldUpdateOperationsInput | $Enums.CountryCode
    taxId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutCompanyNestedInput
    employees?: EmployeeUpdateManyWithoutCompanyNestedInput
    offers?: OfferUpdateManyWithoutCompanyNestedInput
    contracts?: ContractUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutPayrollsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    legalName?: NullableStringFieldUpdateOperationsInput | string | null
    hqCountry?: EnumCountryCodeFieldUpdateOperationsInput | $Enums.CountryCode
    taxId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutCompanyNestedInput
    employees?: EmployeeUncheckedUpdateManyWithoutCompanyNestedInput
    offers?: OfferUncheckedUpdateManyWithoutCompanyNestedInput
    contracts?: ContractUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type PayrollItemUpsertWithWhereUniqueWithoutPayrollInput = {
    where: PayrollItemWhereUniqueInput
    update: XOR<PayrollItemUpdateWithoutPayrollInput, PayrollItemUncheckedUpdateWithoutPayrollInput>
    create: XOR<PayrollItemCreateWithoutPayrollInput, PayrollItemUncheckedCreateWithoutPayrollInput>
  }

  export type PayrollItemUpdateWithWhereUniqueWithoutPayrollInput = {
    where: PayrollItemWhereUniqueInput
    data: XOR<PayrollItemUpdateWithoutPayrollInput, PayrollItemUncheckedUpdateWithoutPayrollInput>
  }

  export type PayrollItemUpdateManyWithWhereWithoutPayrollInput = {
    where: PayrollItemScalarWhereInput
    data: XOR<PayrollItemUpdateManyMutationInput, PayrollItemUncheckedUpdateManyWithoutPayrollInput>
  }

  export type PayrollCreateWithoutItemsInput = {
    id?: string
    month: number
    year: number
    status?: $Enums.PayrollStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    company: CompanyCreateNestedOneWithoutPayrollsInput
  }

  export type PayrollUncheckedCreateWithoutItemsInput = {
    id?: string
    companyId: string
    month: number
    year: number
    status?: $Enums.PayrollStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PayrollCreateOrConnectWithoutItemsInput = {
    where: PayrollWhereUniqueInput
    create: XOR<PayrollCreateWithoutItemsInput, PayrollUncheckedCreateWithoutItemsInput>
  }

  export type EmployeeCreateWithoutPayrollItemsInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    workEmail?: string | null
    dateOfJoin?: Date | string | null
    status?: $Enums.EmployeeStatus
    country: $Enums.CountryCode
    baseSalary?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    company: CompanyCreateNestedOneWithoutEmployeesInput
    manager?: EmployeeCreateNestedOneWithoutDirectReportsInput
    directReports?: EmployeeCreateNestedManyWithoutManagerInput
    contract?: ContractCreateNestedOneWithoutEmployeeInput
    documents?: DocumentCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateWithoutPayrollItemsInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    workEmail?: string | null
    dateOfJoin?: Date | string | null
    status?: $Enums.EmployeeStatus
    companyId: string
    country: $Enums.CountryCode
    baseSalary?: number
    managerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    directReports?: EmployeeUncheckedCreateNestedManyWithoutManagerInput
    contract?: ContractUncheckedCreateNestedOneWithoutEmployeeInput
    documents?: DocumentUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeCreateOrConnectWithoutPayrollItemsInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutPayrollItemsInput, EmployeeUncheckedCreateWithoutPayrollItemsInput>
  }

  export type PayrollUpsertWithoutItemsInput = {
    update: XOR<PayrollUpdateWithoutItemsInput, PayrollUncheckedUpdateWithoutItemsInput>
    create: XOR<PayrollCreateWithoutItemsInput, PayrollUncheckedCreateWithoutItemsInput>
    where?: PayrollWhereInput
  }

  export type PayrollUpdateToOneWithWhereWithoutItemsInput = {
    where?: PayrollWhereInput
    data: XOR<PayrollUpdateWithoutItemsInput, PayrollUncheckedUpdateWithoutItemsInput>
  }

  export type PayrollUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    status?: EnumPayrollStatusFieldUpdateOperationsInput | $Enums.PayrollStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutPayrollsNestedInput
  }

  export type PayrollUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    status?: EnumPayrollStatusFieldUpdateOperationsInput | $Enums.PayrollStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeUpsertWithoutPayrollItemsInput = {
    update: XOR<EmployeeUpdateWithoutPayrollItemsInput, EmployeeUncheckedUpdateWithoutPayrollItemsInput>
    create: XOR<EmployeeCreateWithoutPayrollItemsInput, EmployeeUncheckedCreateWithoutPayrollItemsInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutPayrollItemsInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutPayrollItemsInput, EmployeeUncheckedUpdateWithoutPayrollItemsInput>
  }

  export type EmployeeUpdateWithoutPayrollItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    workEmail?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfJoin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumEmployeeStatusFieldUpdateOperationsInput | $Enums.EmployeeStatus
    country?: EnumCountryCodeFieldUpdateOperationsInput | $Enums.CountryCode
    baseSalary?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutEmployeesNestedInput
    manager?: EmployeeUpdateOneWithoutDirectReportsNestedInput
    directReports?: EmployeeUpdateManyWithoutManagerNestedInput
    contract?: ContractUpdateOneWithoutEmployeeNestedInput
    documents?: DocumentUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutPayrollItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    workEmail?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfJoin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumEmployeeStatusFieldUpdateOperationsInput | $Enums.EmployeeStatus
    companyId?: StringFieldUpdateOperationsInput | string
    country?: EnumCountryCodeFieldUpdateOperationsInput | $Enums.CountryCode
    baseSalary?: FloatFieldUpdateOperationsInput | number
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    directReports?: EmployeeUncheckedUpdateManyWithoutManagerNestedInput
    contract?: ContractUncheckedUpdateOneWithoutEmployeeNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type CompanyCreateWithoutOffersInput = {
    id?: string
    name: string
    legalName?: string | null
    hqCountry: $Enums.CountryCode
    taxId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutCompanyInput
    employees?: EmployeeCreateNestedManyWithoutCompanyInput
    payrolls?: PayrollCreateNestedManyWithoutCompanyInput
    contracts?: ContractCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutOffersInput = {
    id?: string
    name: string
    legalName?: string | null
    hqCountry: $Enums.CountryCode
    taxId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutCompanyInput
    employees?: EmployeeUncheckedCreateNestedManyWithoutCompanyInput
    payrolls?: PayrollUncheckedCreateNestedManyWithoutCompanyInput
    contracts?: ContractUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutOffersInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutOffersInput, CompanyUncheckedCreateWithoutOffersInput>
  }

  export type ContractCreateWithoutOfferInput = {
    id?: string
    status?: $Enums.ContractStatus
    content?: string | null
    legalTerms?: NullableJsonNullValueInput | InputJsonValue
    signedAt?: Date | string | null
    validFrom?: Date | string | null
    validUntil?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    company: CompanyCreateNestedOneWithoutContractsInput
    employee?: EmployeeCreateNestedOneWithoutContractInput
  }

  export type ContractUncheckedCreateWithoutOfferInput = {
    id?: string
    companyId: string
    employeeId?: string | null
    status?: $Enums.ContractStatus
    content?: string | null
    legalTerms?: NullableJsonNullValueInput | InputJsonValue
    signedAt?: Date | string | null
    validFrom?: Date | string | null
    validUntil?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContractCreateOrConnectWithoutOfferInput = {
    where: ContractWhereUniqueInput
    create: XOR<ContractCreateWithoutOfferInput, ContractUncheckedCreateWithoutOfferInput>
  }

  export type CompanyUpsertWithoutOffersInput = {
    update: XOR<CompanyUpdateWithoutOffersInput, CompanyUncheckedUpdateWithoutOffersInput>
    create: XOR<CompanyCreateWithoutOffersInput, CompanyUncheckedCreateWithoutOffersInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutOffersInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutOffersInput, CompanyUncheckedUpdateWithoutOffersInput>
  }

  export type CompanyUpdateWithoutOffersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    legalName?: NullableStringFieldUpdateOperationsInput | string | null
    hqCountry?: EnumCountryCodeFieldUpdateOperationsInput | $Enums.CountryCode
    taxId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutCompanyNestedInput
    employees?: EmployeeUpdateManyWithoutCompanyNestedInput
    payrolls?: PayrollUpdateManyWithoutCompanyNestedInput
    contracts?: ContractUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutOffersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    legalName?: NullableStringFieldUpdateOperationsInput | string | null
    hqCountry?: EnumCountryCodeFieldUpdateOperationsInput | $Enums.CountryCode
    taxId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutCompanyNestedInput
    employees?: EmployeeUncheckedUpdateManyWithoutCompanyNestedInput
    payrolls?: PayrollUncheckedUpdateManyWithoutCompanyNestedInput
    contracts?: ContractUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type ContractUpsertWithoutOfferInput = {
    update: XOR<ContractUpdateWithoutOfferInput, ContractUncheckedUpdateWithoutOfferInput>
    create: XOR<ContractCreateWithoutOfferInput, ContractUncheckedCreateWithoutOfferInput>
    where?: ContractWhereInput
  }

  export type ContractUpdateToOneWithWhereWithoutOfferInput = {
    where?: ContractWhereInput
    data: XOR<ContractUpdateWithoutOfferInput, ContractUncheckedUpdateWithoutOfferInput>
  }

  export type ContractUpdateWithoutOfferInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumContractStatusFieldUpdateOperationsInput | $Enums.ContractStatus
    content?: NullableStringFieldUpdateOperationsInput | string | null
    legalTerms?: NullableJsonNullValueInput | InputJsonValue
    signedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    validFrom?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    validUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutContractsNestedInput
    employee?: EmployeeUpdateOneWithoutContractNestedInput
  }

  export type ContractUncheckedUpdateWithoutOfferInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    employeeId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumContractStatusFieldUpdateOperationsInput | $Enums.ContractStatus
    content?: NullableStringFieldUpdateOperationsInput | string | null
    legalTerms?: NullableJsonNullValueInput | InputJsonValue
    signedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    validFrom?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    validUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyCreateWithoutContractsInput = {
    id?: string
    name: string
    legalName?: string | null
    hqCountry: $Enums.CountryCode
    taxId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutCompanyInput
    employees?: EmployeeCreateNestedManyWithoutCompanyInput
    payrolls?: PayrollCreateNestedManyWithoutCompanyInput
    offers?: OfferCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutContractsInput = {
    id?: string
    name: string
    legalName?: string | null
    hqCountry: $Enums.CountryCode
    taxId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutCompanyInput
    employees?: EmployeeUncheckedCreateNestedManyWithoutCompanyInput
    payrolls?: PayrollUncheckedCreateNestedManyWithoutCompanyInput
    offers?: OfferUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutContractsInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutContractsInput, CompanyUncheckedCreateWithoutContractsInput>
  }

  export type OfferCreateWithoutContractInput = {
    id?: string
    candidateName: string
    candidateEmail: string
    jobTitle: string
    country: $Enums.CountryCode
    salary: number
    status?: $Enums.OfferStatus
    validUntil?: Date | string | null
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    company: CompanyCreateNestedOneWithoutOffersInput
  }

  export type OfferUncheckedCreateWithoutContractInput = {
    id?: string
    companyId: string
    candidateName: string
    candidateEmail: string
    jobTitle: string
    country: $Enums.CountryCode
    salary: number
    status?: $Enums.OfferStatus
    validUntil?: Date | string | null
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OfferCreateOrConnectWithoutContractInput = {
    where: OfferWhereUniqueInput
    create: XOR<OfferCreateWithoutContractInput, OfferUncheckedCreateWithoutContractInput>
  }

  export type EmployeeCreateWithoutContractInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    workEmail?: string | null
    dateOfJoin?: Date | string | null
    status?: $Enums.EmployeeStatus
    country: $Enums.CountryCode
    baseSalary?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    company: CompanyCreateNestedOneWithoutEmployeesInput
    manager?: EmployeeCreateNestedOneWithoutDirectReportsInput
    directReports?: EmployeeCreateNestedManyWithoutManagerInput
    payrollItems?: PayrollItemCreateNestedManyWithoutEmployeeInput
    documents?: DocumentCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateWithoutContractInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    workEmail?: string | null
    dateOfJoin?: Date | string | null
    status?: $Enums.EmployeeStatus
    companyId: string
    country: $Enums.CountryCode
    baseSalary?: number
    managerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    directReports?: EmployeeUncheckedCreateNestedManyWithoutManagerInput
    payrollItems?: PayrollItemUncheckedCreateNestedManyWithoutEmployeeInput
    documents?: DocumentUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeCreateOrConnectWithoutContractInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutContractInput, EmployeeUncheckedCreateWithoutContractInput>
  }

  export type CompanyUpsertWithoutContractsInput = {
    update: XOR<CompanyUpdateWithoutContractsInput, CompanyUncheckedUpdateWithoutContractsInput>
    create: XOR<CompanyCreateWithoutContractsInput, CompanyUncheckedCreateWithoutContractsInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutContractsInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutContractsInput, CompanyUncheckedUpdateWithoutContractsInput>
  }

  export type CompanyUpdateWithoutContractsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    legalName?: NullableStringFieldUpdateOperationsInput | string | null
    hqCountry?: EnumCountryCodeFieldUpdateOperationsInput | $Enums.CountryCode
    taxId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutCompanyNestedInput
    employees?: EmployeeUpdateManyWithoutCompanyNestedInput
    payrolls?: PayrollUpdateManyWithoutCompanyNestedInput
    offers?: OfferUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutContractsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    legalName?: NullableStringFieldUpdateOperationsInput | string | null
    hqCountry?: EnumCountryCodeFieldUpdateOperationsInput | $Enums.CountryCode
    taxId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutCompanyNestedInput
    employees?: EmployeeUncheckedUpdateManyWithoutCompanyNestedInput
    payrolls?: PayrollUncheckedUpdateManyWithoutCompanyNestedInput
    offers?: OfferUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type OfferUpsertWithoutContractInput = {
    update: XOR<OfferUpdateWithoutContractInput, OfferUncheckedUpdateWithoutContractInput>
    create: XOR<OfferCreateWithoutContractInput, OfferUncheckedCreateWithoutContractInput>
    where?: OfferWhereInput
  }

  export type OfferUpdateToOneWithWhereWithoutContractInput = {
    where?: OfferWhereInput
    data: XOR<OfferUpdateWithoutContractInput, OfferUncheckedUpdateWithoutContractInput>
  }

  export type OfferUpdateWithoutContractInput = {
    id?: StringFieldUpdateOperationsInput | string
    candidateName?: StringFieldUpdateOperationsInput | string
    candidateEmail?: StringFieldUpdateOperationsInput | string
    jobTitle?: StringFieldUpdateOperationsInput | string
    country?: EnumCountryCodeFieldUpdateOperationsInput | $Enums.CountryCode
    salary?: FloatFieldUpdateOperationsInput | number
    status?: EnumOfferStatusFieldUpdateOperationsInput | $Enums.OfferStatus
    validUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutOffersNestedInput
  }

  export type OfferUncheckedUpdateWithoutContractInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    candidateName?: StringFieldUpdateOperationsInput | string
    candidateEmail?: StringFieldUpdateOperationsInput | string
    jobTitle?: StringFieldUpdateOperationsInput | string
    country?: EnumCountryCodeFieldUpdateOperationsInput | $Enums.CountryCode
    salary?: FloatFieldUpdateOperationsInput | number
    status?: EnumOfferStatusFieldUpdateOperationsInput | $Enums.OfferStatus
    validUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeUpsertWithoutContractInput = {
    update: XOR<EmployeeUpdateWithoutContractInput, EmployeeUncheckedUpdateWithoutContractInput>
    create: XOR<EmployeeCreateWithoutContractInput, EmployeeUncheckedCreateWithoutContractInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutContractInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutContractInput, EmployeeUncheckedUpdateWithoutContractInput>
  }

  export type EmployeeUpdateWithoutContractInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    workEmail?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfJoin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumEmployeeStatusFieldUpdateOperationsInput | $Enums.EmployeeStatus
    country?: EnumCountryCodeFieldUpdateOperationsInput | $Enums.CountryCode
    baseSalary?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutEmployeesNestedInput
    manager?: EmployeeUpdateOneWithoutDirectReportsNestedInput
    directReports?: EmployeeUpdateManyWithoutManagerNestedInput
    payrollItems?: PayrollItemUpdateManyWithoutEmployeeNestedInput
    documents?: DocumentUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutContractInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    workEmail?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfJoin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumEmployeeStatusFieldUpdateOperationsInput | $Enums.EmployeeStatus
    companyId?: StringFieldUpdateOperationsInput | string
    country?: EnumCountryCodeFieldUpdateOperationsInput | $Enums.CountryCode
    baseSalary?: FloatFieldUpdateOperationsInput | number
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    directReports?: EmployeeUncheckedUpdateManyWithoutManagerNestedInput
    payrollItems?: PayrollItemUncheckedUpdateManyWithoutEmployeeNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeCreateWithoutDocumentsInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    workEmail?: string | null
    dateOfJoin?: Date | string | null
    status?: $Enums.EmployeeStatus
    country: $Enums.CountryCode
    baseSalary?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    company: CompanyCreateNestedOneWithoutEmployeesInput
    manager?: EmployeeCreateNestedOneWithoutDirectReportsInput
    directReports?: EmployeeCreateNestedManyWithoutManagerInput
    payrollItems?: PayrollItemCreateNestedManyWithoutEmployeeInput
    contract?: ContractCreateNestedOneWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateWithoutDocumentsInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    workEmail?: string | null
    dateOfJoin?: Date | string | null
    status?: $Enums.EmployeeStatus
    companyId: string
    country: $Enums.CountryCode
    baseSalary?: number
    managerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    directReports?: EmployeeUncheckedCreateNestedManyWithoutManagerInput
    payrollItems?: PayrollItemUncheckedCreateNestedManyWithoutEmployeeInput
    contract?: ContractUncheckedCreateNestedOneWithoutEmployeeInput
  }

  export type EmployeeCreateOrConnectWithoutDocumentsInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutDocumentsInput, EmployeeUncheckedCreateWithoutDocumentsInput>
  }

  export type EmployeeUpsertWithoutDocumentsInput = {
    update: XOR<EmployeeUpdateWithoutDocumentsInput, EmployeeUncheckedUpdateWithoutDocumentsInput>
    create: XOR<EmployeeCreateWithoutDocumentsInput, EmployeeUncheckedCreateWithoutDocumentsInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutDocumentsInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutDocumentsInput, EmployeeUncheckedUpdateWithoutDocumentsInput>
  }

  export type EmployeeUpdateWithoutDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    workEmail?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfJoin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumEmployeeStatusFieldUpdateOperationsInput | $Enums.EmployeeStatus
    country?: EnumCountryCodeFieldUpdateOperationsInput | $Enums.CountryCode
    baseSalary?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutEmployeesNestedInput
    manager?: EmployeeUpdateOneWithoutDirectReportsNestedInput
    directReports?: EmployeeUpdateManyWithoutManagerNestedInput
    payrollItems?: PayrollItemUpdateManyWithoutEmployeeNestedInput
    contract?: ContractUpdateOneWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    workEmail?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfJoin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumEmployeeStatusFieldUpdateOperationsInput | $Enums.EmployeeStatus
    companyId?: StringFieldUpdateOperationsInput | string
    country?: EnumCountryCodeFieldUpdateOperationsInput | $Enums.CountryCode
    baseSalary?: FloatFieldUpdateOperationsInput | number
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    directReports?: EmployeeUncheckedUpdateManyWithoutManagerNestedInput
    payrollItems?: PayrollItemUncheckedUpdateManyWithoutEmployeeNestedInput
    contract?: ContractUncheckedUpdateOneWithoutEmployeeNestedInput
  }

  export type UserCreateManyCompanyInput = {
    id?: string
    email: string
    passwordHash: string
    firstName: string
    lastName: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmployeeCreateManyCompanyInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    workEmail?: string | null
    dateOfJoin?: Date | string | null
    status?: $Enums.EmployeeStatus
    country: $Enums.CountryCode
    baseSalary?: number
    managerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PayrollCreateManyCompanyInput = {
    id?: string
    month: number
    year: number
    status?: $Enums.PayrollStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OfferCreateManyCompanyInput = {
    id?: string
    candidateName: string
    candidateEmail: string
    jobTitle: string
    country: $Enums.CountryCode
    salary: number
    status?: $Enums.OfferStatus
    validUntil?: Date | string | null
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContractCreateManyCompanyInput = {
    id?: string
    offerId?: string | null
    employeeId?: string | null
    status?: $Enums.ContractStatus
    content?: string | null
    legalTerms?: NullableJsonNullValueInput | InputJsonValue
    signedAt?: Date | string | null
    validFrom?: Date | string | null
    validUntil?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    workEmail?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfJoin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumEmployeeStatusFieldUpdateOperationsInput | $Enums.EmployeeStatus
    country?: EnumCountryCodeFieldUpdateOperationsInput | $Enums.CountryCode
    baseSalary?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    manager?: EmployeeUpdateOneWithoutDirectReportsNestedInput
    directReports?: EmployeeUpdateManyWithoutManagerNestedInput
    payrollItems?: PayrollItemUpdateManyWithoutEmployeeNestedInput
    contract?: ContractUpdateOneWithoutEmployeeNestedInput
    documents?: DocumentUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    workEmail?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfJoin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumEmployeeStatusFieldUpdateOperationsInput | $Enums.EmployeeStatus
    country?: EnumCountryCodeFieldUpdateOperationsInput | $Enums.CountryCode
    baseSalary?: FloatFieldUpdateOperationsInput | number
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    directReports?: EmployeeUncheckedUpdateManyWithoutManagerNestedInput
    payrollItems?: PayrollItemUncheckedUpdateManyWithoutEmployeeNestedInput
    contract?: ContractUncheckedUpdateOneWithoutEmployeeNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    workEmail?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfJoin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumEmployeeStatusFieldUpdateOperationsInput | $Enums.EmployeeStatus
    country?: EnumCountryCodeFieldUpdateOperationsInput | $Enums.CountryCode
    baseSalary?: FloatFieldUpdateOperationsInput | number
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayrollUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    status?: EnumPayrollStatusFieldUpdateOperationsInput | $Enums.PayrollStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: PayrollItemUpdateManyWithoutPayrollNestedInput
  }

  export type PayrollUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    status?: EnumPayrollStatusFieldUpdateOperationsInput | $Enums.PayrollStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: PayrollItemUncheckedUpdateManyWithoutPayrollNestedInput
  }

  export type PayrollUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    status?: EnumPayrollStatusFieldUpdateOperationsInput | $Enums.PayrollStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OfferUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    candidateName?: StringFieldUpdateOperationsInput | string
    candidateEmail?: StringFieldUpdateOperationsInput | string
    jobTitle?: StringFieldUpdateOperationsInput | string
    country?: EnumCountryCodeFieldUpdateOperationsInput | $Enums.CountryCode
    salary?: FloatFieldUpdateOperationsInput | number
    status?: EnumOfferStatusFieldUpdateOperationsInput | $Enums.OfferStatus
    validUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contract?: ContractUpdateOneWithoutOfferNestedInput
  }

  export type OfferUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    candidateName?: StringFieldUpdateOperationsInput | string
    candidateEmail?: StringFieldUpdateOperationsInput | string
    jobTitle?: StringFieldUpdateOperationsInput | string
    country?: EnumCountryCodeFieldUpdateOperationsInput | $Enums.CountryCode
    salary?: FloatFieldUpdateOperationsInput | number
    status?: EnumOfferStatusFieldUpdateOperationsInput | $Enums.OfferStatus
    validUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contract?: ContractUncheckedUpdateOneWithoutOfferNestedInput
  }

  export type OfferUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    candidateName?: StringFieldUpdateOperationsInput | string
    candidateEmail?: StringFieldUpdateOperationsInput | string
    jobTitle?: StringFieldUpdateOperationsInput | string
    country?: EnumCountryCodeFieldUpdateOperationsInput | $Enums.CountryCode
    salary?: FloatFieldUpdateOperationsInput | number
    status?: EnumOfferStatusFieldUpdateOperationsInput | $Enums.OfferStatus
    validUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContractUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumContractStatusFieldUpdateOperationsInput | $Enums.ContractStatus
    content?: NullableStringFieldUpdateOperationsInput | string | null
    legalTerms?: NullableJsonNullValueInput | InputJsonValue
    signedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    validFrom?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    validUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    offer?: OfferUpdateOneWithoutContractNestedInput
    employee?: EmployeeUpdateOneWithoutContractNestedInput
  }

  export type ContractUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    offerId?: NullableStringFieldUpdateOperationsInput | string | null
    employeeId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumContractStatusFieldUpdateOperationsInput | $Enums.ContractStatus
    content?: NullableStringFieldUpdateOperationsInput | string | null
    legalTerms?: NullableJsonNullValueInput | InputJsonValue
    signedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    validFrom?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    validUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContractUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    offerId?: NullableStringFieldUpdateOperationsInput | string | null
    employeeId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumContractStatusFieldUpdateOperationsInput | $Enums.ContractStatus
    content?: NullableStringFieldUpdateOperationsInput | string | null
    legalTerms?: NullableJsonNullValueInput | InputJsonValue
    signedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    validFrom?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    validUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeCreateManyManagerInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    workEmail?: string | null
    dateOfJoin?: Date | string | null
    status?: $Enums.EmployeeStatus
    companyId: string
    country: $Enums.CountryCode
    baseSalary?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PayrollItemCreateManyEmployeeInput = {
    id?: string
    payrollId: string
    grossSalary: number
    netSalary: number
    totalDeductions: number
    totalContributions: number
    details: JsonNullValueInput | InputJsonValue
    status?: $Enums.PayrollItemStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DocumentCreateManyEmployeeInput = {
    id?: string
    name: string
    type: string
    url?: string | null
    status?: $Enums.DocumentStatus
    meta?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmployeeUpdateWithoutManagerInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    workEmail?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfJoin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumEmployeeStatusFieldUpdateOperationsInput | $Enums.EmployeeStatus
    country?: EnumCountryCodeFieldUpdateOperationsInput | $Enums.CountryCode
    baseSalary?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutEmployeesNestedInput
    directReports?: EmployeeUpdateManyWithoutManagerNestedInput
    payrollItems?: PayrollItemUpdateManyWithoutEmployeeNestedInput
    contract?: ContractUpdateOneWithoutEmployeeNestedInput
    documents?: DocumentUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutManagerInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    workEmail?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfJoin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumEmployeeStatusFieldUpdateOperationsInput | $Enums.EmployeeStatus
    companyId?: StringFieldUpdateOperationsInput | string
    country?: EnumCountryCodeFieldUpdateOperationsInput | $Enums.CountryCode
    baseSalary?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    directReports?: EmployeeUncheckedUpdateManyWithoutManagerNestedInput
    payrollItems?: PayrollItemUncheckedUpdateManyWithoutEmployeeNestedInput
    contract?: ContractUncheckedUpdateOneWithoutEmployeeNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateManyWithoutManagerInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    workEmail?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfJoin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumEmployeeStatusFieldUpdateOperationsInput | $Enums.EmployeeStatus
    companyId?: StringFieldUpdateOperationsInput | string
    country?: EnumCountryCodeFieldUpdateOperationsInput | $Enums.CountryCode
    baseSalary?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayrollItemUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    grossSalary?: FloatFieldUpdateOperationsInput | number
    netSalary?: FloatFieldUpdateOperationsInput | number
    totalDeductions?: FloatFieldUpdateOperationsInput | number
    totalContributions?: FloatFieldUpdateOperationsInput | number
    details?: JsonNullValueInput | InputJsonValue
    status?: EnumPayrollItemStatusFieldUpdateOperationsInput | $Enums.PayrollItemStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payroll?: PayrollUpdateOneRequiredWithoutItemsNestedInput
  }

  export type PayrollItemUncheckedUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    payrollId?: StringFieldUpdateOperationsInput | string
    grossSalary?: FloatFieldUpdateOperationsInput | number
    netSalary?: FloatFieldUpdateOperationsInput | number
    totalDeductions?: FloatFieldUpdateOperationsInput | number
    totalContributions?: FloatFieldUpdateOperationsInput | number
    details?: JsonNullValueInput | InputJsonValue
    status?: EnumPayrollItemStatusFieldUpdateOperationsInput | $Enums.PayrollItemStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayrollItemUncheckedUpdateManyWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    payrollId?: StringFieldUpdateOperationsInput | string
    grossSalary?: FloatFieldUpdateOperationsInput | number
    netSalary?: FloatFieldUpdateOperationsInput | number
    totalDeductions?: FloatFieldUpdateOperationsInput | number
    totalContributions?: FloatFieldUpdateOperationsInput | number
    details?: JsonNullValueInput | InputJsonValue
    status?: EnumPayrollItemStatusFieldUpdateOperationsInput | $Enums.PayrollItemStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus
    meta?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentUncheckedUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus
    meta?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentUncheckedUpdateManyWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus
    meta?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayrollItemCreateManyPayrollInput = {
    id?: string
    employeeId: string
    grossSalary: number
    netSalary: number
    totalDeductions: number
    totalContributions: number
    details: JsonNullValueInput | InputJsonValue
    status?: $Enums.PayrollItemStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PayrollItemUpdateWithoutPayrollInput = {
    id?: StringFieldUpdateOperationsInput | string
    grossSalary?: FloatFieldUpdateOperationsInput | number
    netSalary?: FloatFieldUpdateOperationsInput | number
    totalDeductions?: FloatFieldUpdateOperationsInput | number
    totalContributions?: FloatFieldUpdateOperationsInput | number
    details?: JsonNullValueInput | InputJsonValue
    status?: EnumPayrollItemStatusFieldUpdateOperationsInput | $Enums.PayrollItemStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: EmployeeUpdateOneRequiredWithoutPayrollItemsNestedInput
  }

  export type PayrollItemUncheckedUpdateWithoutPayrollInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    grossSalary?: FloatFieldUpdateOperationsInput | number
    netSalary?: FloatFieldUpdateOperationsInput | number
    totalDeductions?: FloatFieldUpdateOperationsInput | number
    totalContributions?: FloatFieldUpdateOperationsInput | number
    details?: JsonNullValueInput | InputJsonValue
    status?: EnumPayrollItemStatusFieldUpdateOperationsInput | $Enums.PayrollItemStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayrollItemUncheckedUpdateManyWithoutPayrollInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    grossSalary?: FloatFieldUpdateOperationsInput | number
    netSalary?: FloatFieldUpdateOperationsInput | number
    totalDeductions?: FloatFieldUpdateOperationsInput | number
    totalContributions?: FloatFieldUpdateOperationsInput | number
    details?: JsonNullValueInput | InputJsonValue
    status?: EnumPayrollItemStatusFieldUpdateOperationsInput | $Enums.PayrollItemStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}