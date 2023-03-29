ATTACH TABLE _ UUID '953e8c7b-69a2-4cdd-8af4-469d07aad3a5'
(
    `timestamp` DateTime64(9) CODEC(DoubleDelta, LZ4),
    `traceID` FixedString(32) CODEC(ZSTD(1)),
    `spanID` String CODEC(ZSTD(1)),
    `parentSpanID` String CODEC(ZSTD(1)),
    `serviceName` LowCardinality(String) CODEC(ZSTD(1)),
    `name` LowCardinality(String) CODEC(ZSTD(1)),
    `kind` Int8 CODEC(T64, ZSTD(1)),
    `durationNano` UInt64 CODEC(T64, ZSTD(1)),
    `statusCode` Int16 CODEC(T64, ZSTD(1)),
    `externalHttpMethod` LowCardinality(String) CODEC(ZSTD(1)),
    `externalHttpUrl` LowCardinality(String) CODEC(ZSTD(1)),
    `component` LowCardinality(String) CODEC(ZSTD(1)),
    `dbSystem` LowCardinality(String) CODEC(ZSTD(1)),
    `dbName` LowCardinality(String) CODEC(ZSTD(1)),
    `dbOperation` LowCardinality(String) CODEC(ZSTD(1)),
    `peerService` LowCardinality(String) CODEC(ZSTD(1)),
    `events` Array(String) CODEC(ZSTD(2)),
    `httpMethod` LowCardinality(String) CODEC(ZSTD(1)),
    `httpUrl` LowCardinality(String) CODEC(ZSTD(1)),
    `httpCode` LowCardinality(String) CODEC(ZSTD(1)),
    `httpRoute` LowCardinality(String) CODEC(ZSTD(1)),
    `httpHost` LowCardinality(String) CODEC(ZSTD(1)),
    `msgSystem` LowCardinality(String) CODEC(ZSTD(1)),
    `msgOperation` LowCardinality(String) CODEC(ZSTD(1)),
    `hasError` Bool CODEC(T64, ZSTD(1)),
    `tagMap` Map(LowCardinality(String), String) CODEC(ZSTD(1)),
    `gRPCMethod` LowCardinality(String) CODEC(ZSTD(1)),
    `gRPCCode` LowCardinality(String) CODEC(ZSTD(1)),
    `rpcSystem` LowCardinality(String) CODEC(ZSTD(1)),
    `rpcService` LowCardinality(String) CODEC(ZSTD(1)),
    `rpcMethod` LowCardinality(String) CODEC(ZSTD(1)),
    `responseStatusCode` LowCardinality(String) CODEC(ZSTD(1)),
    `stringTagMap` Map(String, String) CODEC(ZSTD(1)),
    `numberTagMap` Map(String, Float64) CODEC(ZSTD(1)),
    `boolTagMap` Map(String, Bool) CODEC(ZSTD(1))
)
ENGINE = Distributed('cluster', 'signoz_traces', 'signoz_index_v2', cityHash64(traceID))