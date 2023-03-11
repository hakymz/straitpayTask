const generateCardNumber = () => {
  let validCardNo;
  while (true) {
    const randomNo = Math.random().toFixed(10).replace("0.", "");
    const result = validateDigit(randomNo);
    if (result) {
      validCardNo = randomNo;
      break;
    }
  }

  return { validCardNo };
};

const validateDigit = (digit) => {
  const cardNo = digit?.toString?.();
  if (cardNo?.toString().length != 10) {
    return { status: false, error: "Card no must be 10digits" };
  }
  if (isNaN(cardNo)) {
    return { status: false, error: "Card digits must contain number" };
  }

  let sumNumber = 0;
  let isSecond = false;
  for (let i = cardNo.length - 1; i >= 0; i--) {
    let cDigit = parseInt(cardNo[i]);
    //Double the second digits
    if (isSecond) {
      cDigit = cDigit * 2;
      // check it  has more than 1 digits
      if (cDigit.toString()?.length > 1) {
        sumNumber += eval(cDigit.toString?.()?.split("")?.join("+"));
      } else {
        sumNumber += cDigit;
      }
    } else {
      sumNumber += cDigit;
    }

    isSecond = !isSecond;
  }

  return sumNumber % 10 == 0;
};

// console.log(validateDigit(153180678));
console.log(generateCardNumber());
