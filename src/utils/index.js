export const getSwishLink = (
  payee,
  isPayeeEditable,
  amount,
  isAmountEditable,
  message,
  isMessageEditable
) => {
  // Reference: https://gist.github.com/filleokus/a8f1ffee4d49e09572aacd6239bc84cd
  const swishData = {
    version: 1,
    payee: {
      value: payee.replace(/\D+/g, ''),
    },
    amount: {
      value: parseInt(amount, 10),
    },
  };

  if (isPayeeEditable) {
    swishData.payee.editable = true;
  }

  if (isAmountEditable) {
    swishData.amount.editable = true;
  }
  
  if (message && message.length > 0) {
    swishData.message = {
      value: message,
    };
    
    if (isMessageEditable) {
      swishData.message.editable = true;
    }
  }
  
  const baseURL = "swish://payment?data=";
  return baseURL + encodeURIComponent(JSON.stringify(swishData));
};