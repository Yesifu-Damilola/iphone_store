export const formatCurrency = (amount, currency = "NGN", locale = "en-NG") => {
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency: currency,
    }).format(amount);
  };