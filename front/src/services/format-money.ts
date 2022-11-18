export const formatMoney = (value: number) => {
  const balance = value || '00';
  if (balance < 10) return '00,0' + balance;
  if (balance < 100) return '00,' + balance;
  const money = String(balance).split('');
  money.splice(-2, 0, ',');
  return money.join('');
};
