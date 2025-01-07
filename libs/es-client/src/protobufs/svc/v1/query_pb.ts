// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file svc/v1/query.proto (package svc.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Params, Service } from "./genesis_pb.js";

/**
 * QueryParamsRequest is the request type for the Query/Params RPC method.
 *
 * @generated from message svc.v1.QueryParamsRequest
 */
export class QueryParamsRequest extends Message<QueryParamsRequest> {
  constructor(data?: PartialMessage<QueryParamsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "svc.v1.QueryParamsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryParamsRequest {
    return new QueryParamsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryParamsRequest {
    return new QueryParamsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryParamsRequest {
    return new QueryParamsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryParamsRequest | PlainMessage<QueryParamsRequest> | undefined, b: QueryParamsRequest | PlainMessage<QueryParamsRequest> | undefined): boolean {
    return proto3.util.equals(QueryParamsRequest, a, b);
  }
}

/**
 * QueryParamsResponse is the response type for the Query/Params RPC method.
 *
 * @generated from message svc.v1.QueryParamsResponse
 */
export class QueryParamsResponse extends Message<QueryParamsResponse> {
  /**
   * params defines the parameters of the module.
   *
   * @generated from field: svc.v1.Params params = 1;
   */
  params?: Params;

  constructor(data?: PartialMessage<QueryParamsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "svc.v1.QueryParamsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "params", kind: "message", T: Params },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryParamsResponse {
    return new QueryParamsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryParamsResponse {
    return new QueryParamsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryParamsResponse {
    return new QueryParamsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryParamsResponse | PlainMessage<QueryParamsResponse> | undefined, b: QueryParamsResponse | PlainMessage<QueryParamsResponse> | undefined): boolean {
    return proto3.util.equals(QueryParamsResponse, a, b);
  }
}

/**
 * QueryOriginExistsRequest is the request type for the Query/OriginExists RPC method.
 *
 * @generated from message svc.v1.QueryOriginExistsRequest
 */
export class QueryOriginExistsRequest extends Message<QueryOriginExistsRequest> {
  /**
   * origin is the origin to query.
   *
   * @generated from field: string origin = 1;
   */
  origin = "";

  constructor(data?: PartialMessage<QueryOriginExistsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "svc.v1.QueryOriginExistsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "origin", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryOriginExistsRequest {
    return new QueryOriginExistsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryOriginExistsRequest {
    return new QueryOriginExistsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryOriginExistsRequest {
    return new QueryOriginExistsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryOriginExistsRequest | PlainMessage<QueryOriginExistsRequest> | undefined, b: QueryOriginExistsRequest | PlainMessage<QueryOriginExistsRequest> | undefined): boolean {
    return proto3.util.equals(QueryOriginExistsRequest, a, b);
  }
}

/**
 * QueryOriginExistsResponse is the response type for the Query/OriginExists RPC method.
 *
 * @generated from message svc.v1.QueryOriginExistsResponse
 */
export class QueryOriginExistsResponse extends Message<QueryOriginExistsResponse> {
  /**
   * exists is the boolean value representing whether the origin exists.
   *
   * @generated from field: bool exists = 1;
   */
  exists = false;

  constructor(data?: PartialMessage<QueryOriginExistsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "svc.v1.QueryOriginExistsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "exists", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryOriginExistsResponse {
    return new QueryOriginExistsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryOriginExistsResponse {
    return new QueryOriginExistsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryOriginExistsResponse {
    return new QueryOriginExistsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryOriginExistsResponse | PlainMessage<QueryOriginExistsResponse> | undefined, b: QueryOriginExistsResponse | PlainMessage<QueryOriginExistsResponse> | undefined): boolean {
    return proto3.util.equals(QueryOriginExistsResponse, a, b);
  }
}

/**
 * QueryResolveOriginRequest is the request type for the Query/ResolveOrigin RPC method.
 *
 * @generated from message svc.v1.QueryResolveOriginRequest
 */
export class QueryResolveOriginRequest extends Message<QueryResolveOriginRequest> {
  /**
   * origin is the origin to query.
   *
   * @generated from field: string origin = 1;
   */
  origin = "";

  constructor(data?: PartialMessage<QueryResolveOriginRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "svc.v1.QueryResolveOriginRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "origin", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryResolveOriginRequest {
    return new QueryResolveOriginRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryResolveOriginRequest {
    return new QueryResolveOriginRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryResolveOriginRequest {
    return new QueryResolveOriginRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryResolveOriginRequest | PlainMessage<QueryResolveOriginRequest> | undefined, b: QueryResolveOriginRequest | PlainMessage<QueryResolveOriginRequest> | undefined): boolean {
    return proto3.util.equals(QueryResolveOriginRequest, a, b);
  }
}

/**
 * QueryResolveOriginResponse is the response type for the Query/ResolveOrigin RPC method.
 *
 * @generated from message svc.v1.QueryResolveOriginResponse
 */
export class QueryResolveOriginResponse extends Message<QueryResolveOriginResponse> {
  /**
   * record is the record of the origin.
   *
   * @generated from field: svc.v1.Service record = 1;
   */
  record?: Service;

  constructor(data?: PartialMessage<QueryResolveOriginResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "svc.v1.QueryResolveOriginResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "record", kind: "message", T: Service },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryResolveOriginResponse {
    return new QueryResolveOriginResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryResolveOriginResponse {
    return new QueryResolveOriginResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryResolveOriginResponse {
    return new QueryResolveOriginResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryResolveOriginResponse | PlainMessage<QueryResolveOriginResponse> | undefined, b: QueryResolveOriginResponse | PlainMessage<QueryResolveOriginResponse> | undefined): boolean {
    return proto3.util.equals(QueryResolveOriginResponse, a, b);
  }
}

