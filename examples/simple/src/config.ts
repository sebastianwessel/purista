import { HttpServerConfig } from '@purista/core'

const config: HttpServerConfig = {
  port: 9090,
  logLevel: 'debug',
  domain: 'localhost',
  cookieSecret: 'oCrUlLnZqhj99evenJ3x',
  options: {
    allowHTTP1: true,
    ca: `-----BEGIN CERTIFICATE-----
MIIFtTCCA52gAwIBAgIUd2acASMu92IhZ8ITQiQpG86v/2EwDQYJKoZIhvcNAQEN
BQAwajEXMBUGA1UEAwwOQW4gTVFUVCBicm9rZXIxFjAUBgNVBAoMDU93blRyYWNr
cy5vcmcxFDASBgNVBAsMC2dlbmVyYXRlLUNBMSEwHwYJKoZIhvcNAQkBFhJub2Jv
ZHlAZXhhbXBsZS5uZXQwHhcNMjIwMjI0MTQ0NTM1WhcNMzIwMjIyMTQ0NTM1WjBq
MRcwFQYDVQQDDA5BbiBNUVRUIGJyb2tlcjEWMBQGA1UECgwNT3duVHJhY2tzLm9y
ZzEUMBIGA1UECwwLZ2VuZXJhdGUtQ0ExITAfBgkqhkiG9w0BCQEWEm5vYm9keUBl
eGFtcGxlLm5ldDCCAiIwDQYJKoZIhvcNAQEBBQADggIPADCCAgoCggIBAL3dn84f
9HONOUD+7bZnt0kwEcB21PdmqgrjgDyP//rcgLvOl0T8NE044IGMXT/9vMP2m73T
CgpxTCsvIKaxw2nVfkMNAEIdvM3tx0TDxQr7hAgSVYmwl0mcbrEm9i739zHyP5tj
StaGGIoGq8/CF6Pt+xAvig+KrdiFqYh4MbP18kAN+LC/Mi9ZXupSeGCYOvSXzhYf
QnPBGpclTM/6CXzLnmSXsssDHDrya+YnQpan2OxMUoCTlyJA3Y0kjl21KpUI34Km
putjnDe78SSUvaHelYR37teEorxtk3hTg2KHocPQTDdUizpvRIDQOuT/+fSFo2+q
TwwSWbI+v9AEBy21rDnKfjLNF0stnWlGh6qfdOwyEGI9MA0wI1vOKDzFm2vc2dSI
lbmkaxqJ+2FdxNX2OPH+JuBdH7Y3N4tNuYfCN3Z/EncuGJqoHLVtiktuXb/B+HcJ
6U8xpwvWkWvtjxj42w4ONe/bh8+G7VMPHYFyAnizl0lwDyJuFHItUS5xmt/Hi+7K
XJaQZTjHf6PvWcF43z+VqANI6hcXnd19ke2Sj7KjkPfR5XFN+j+LWRNJDu4t9Lzd
jm4MD9NP2uf4dk4TQo+HBfbYakOw2lik3gRfwTXBMZGWxpk6CbxQ87aXcZs9KqM8
yVToKFx0SfWNRVuOp5SxYs7tNirwP83ACCuDAgMBAAGjUzBRMB0GA1UdDgQWBBS1
Fi1+TkT1/uKTsp6a4nCEmRmzzTAfBgNVHSMEGDAWgBS1Fi1+TkT1/uKTsp6a4nCE
mRmzzTAPBgNVHRMBAf8EBTADAQH/MA0GCSqGSIb3DQEBDQUAA4ICAQBduOukuEYd
5od8bFT8/a1fhxvDv3FkW0uroeyBotgc2HFdk19IhRsXWx+wQbJFSRJRs2QL1oGr
Jf6AIWxLjDSeVP6wANFDZRIte3Xq10Ustf98LF0cDfv8+wFfmvttx8HuhqfWHawQ
t8UViz83pIw0OuBnie+CNgpXU0D00ixV5OB1IZe3hugOhVEBeb6jps7FOmrk1Kak
guC3+RuHqtJR0C/V9cb/ntToyx9MvfJR9OYLuzqdoXXxelyDkScgLk43hcSqK5D0
GA3GUUk6fohIcQnzx9MpR+TrbEln1ooXreQlFfmoaYzXVFpJm8vYENEdfird/EB4
C5znq+KmNetihdYrDj8qONb2nbmI4Whj+cXrOlR5mdZnzyTTJ/zNCscmHgNX382t
HCre3sXNufvyvdGCGAKW2blgQVvXQNpHVchso4a6zUlamI2cIdksKeUZd1fY+/Cv
6LH8aX2I7QntkMM0UORJ27psXL8qN2IfFubiITKZU+WVBW7xsS1Nff/+hL2JvGiy
JHaECvH1BRbZw7dndGmrGpIVxCpopwCoo/0WUptRfMiN6vRCOh/P2Tt+B73z4dgC
B5lnlON0/QyDyqmBM5CCUBnme+iXieSp9wSPPfCezwTCmsEgC+Wrcs84kdeYKFgZ
xb3XdLyq9pQhJt9775OdAjM6+/ONiL2Mzg==
-----END CERTIFICATE-----`,
    key: `-----BEGIN PRIVATE KEY-----
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
8L1kU70jQVKV2A1RTsizk7rjwcxX
-----END PRIVATE KEY-----
`,
    cert: `-----BEGIN CERTIFICATE-----
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
-----END CERTIFICATE-----
`,
  },
  apiMountPath: '/api',
  openApi: {
    enabled: true,
    info: {
      title: 'backend api',
      description: 'OpenApi definition for server endpoints',
      version: '1.0.0',
    },
  },
}

export default config
