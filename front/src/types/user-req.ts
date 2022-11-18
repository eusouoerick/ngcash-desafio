export type UserReq = {
  id: string;
  username: string;
  account: {
    id: string;
    balance: number;
  };
};
