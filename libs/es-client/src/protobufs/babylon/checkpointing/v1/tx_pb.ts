// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file babylon/checkpointing/v1/tx.proto (package babylon.checkpointing.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { BlsKey } from "./bls_key_pb.js";
import { MsgCreateValidator } from "../../../cosmos/staking/v1beta1/tx_pb.js";

/**
 * MsgWrappedCreateValidator defines a wrapped message to create a validator
 *
 * @generated from message babylon.checkpointing.v1.MsgWrappedCreateValidator
 */
export class MsgWrappedCreateValidator extends Message<MsgWrappedCreateValidator> {
  /**
   * @generated from field: babylon.checkpointing.v1.BlsKey key = 1;
   */
  key?: BlsKey;

  /**
   * @generated from field: cosmos.staking.v1beta1.MsgCreateValidator msg_create_validator = 2;
   */
  msgCreateValidator?: MsgCreateValidator;

  constructor(data?: PartialMessage<MsgWrappedCreateValidator>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "babylon.checkpointing.v1.MsgWrappedCreateValidator";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "key", kind: "message", T: BlsKey },
    { no: 2, name: "msg_create_validator", kind: "message", T: MsgCreateValidator },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgWrappedCreateValidator {
    return new MsgWrappedCreateValidator().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgWrappedCreateValidator {
    return new MsgWrappedCreateValidator().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgWrappedCreateValidator {
    return new MsgWrappedCreateValidator().fromJsonString(jsonString, options);
  }

  static equals(a: MsgWrappedCreateValidator | PlainMessage<MsgWrappedCreateValidator> | undefined, b: MsgWrappedCreateValidator | PlainMessage<MsgWrappedCreateValidator> | undefined): boolean {
    return proto3.util.equals(MsgWrappedCreateValidator, a, b);
  }
}

/**
 * MsgWrappedCreateValidatorResponse defines the MsgWrappedCreateValidator
 * response type
 *
 * @generated from message babylon.checkpointing.v1.MsgWrappedCreateValidatorResponse
 */
export class MsgWrappedCreateValidatorResponse extends Message<MsgWrappedCreateValidatorResponse> {
  constructor(data?: PartialMessage<MsgWrappedCreateValidatorResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "babylon.checkpointing.v1.MsgWrappedCreateValidatorResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgWrappedCreateValidatorResponse {
    return new MsgWrappedCreateValidatorResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgWrappedCreateValidatorResponse {
    return new MsgWrappedCreateValidatorResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgWrappedCreateValidatorResponse {
    return new MsgWrappedCreateValidatorResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgWrappedCreateValidatorResponse | PlainMessage<MsgWrappedCreateValidatorResponse> | undefined, b: MsgWrappedCreateValidatorResponse | PlainMessage<MsgWrappedCreateValidatorResponse> | undefined): boolean {
    return proto3.util.equals(MsgWrappedCreateValidatorResponse, a, b);
  }
}

