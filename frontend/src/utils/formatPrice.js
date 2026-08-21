/**
 * Formats a numeric price into standard Indian Rupee notation (Lakhs / Crores)
 * @param {number} price 
 * @returns {string} E.g., "₹85 Lakhs", "₹2.4 Crore", "₹45,000"
 */
export const formatIndianPrice = (price) => {
  if (price === undefined || price === null || isNaN(price)) return '₹0';

  if (price >= 10000000) {
    // 1 Crore = 10,000,000
    const cr = (price / 10000000).toFixed(2).replace(/\.00$/, '');
    return `₹${cr} Crore`;
  } else if (price >= 100000) {
    // 1 Lakh = 100,000
    const lakh = (price / 100000).toFixed(2).replace(/\.00$/, '');
    return `₹${lakh} Lakhs`;
  } else {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  }
};

export default formatIndianPrice;
