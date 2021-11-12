export interface Asset {
  icon: string;
  value: string;
  symbol: string;
}

export interface DetailAsset extends Asset {
  balance: string;
  group: string;
}
