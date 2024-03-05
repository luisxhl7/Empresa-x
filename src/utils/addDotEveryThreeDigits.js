export const addDotEveryThreeDigits = (number) => {
    const numberString = String(number);
    
    const [integerPart, decimalPart] = numberString.split('.');
    
    const formattedIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  
    if (decimalPart !== undefined) {
      return formattedIntegerPart + '.' + decimalPart;
    } else {
      return formattedIntegerPart;
    }
}
  