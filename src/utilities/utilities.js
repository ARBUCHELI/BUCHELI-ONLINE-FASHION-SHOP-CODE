export function calculatePrice(price, currency) {
    switch (currency) {
      case 'EUR':
        return price * 0.86;
      case 'RUB':
        return price * 78.87;
      default:
        return price;
    }
  }
  
  export function calculateTotal(cart, currency) {
    let totalUSD = 0;
    Object.keys(cart).forEach((itemName) => {
      totalUSD += cart[itemName].price * cart[itemName].quantity;
    });
    return calculatePrice(totalUSD, currency).toFixed(2);
  }
  
  export function getCurrencySymbol(currencyFilter) {
    switch (currencyFilter) {
      case 'USD':
        return '$';
      case 'EUR':
        return '€';
      case 'RUB':
        return '₽';
      default:
        return '';
    }
  }