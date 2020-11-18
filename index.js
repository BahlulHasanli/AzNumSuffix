export default function azNumSuffix(num, concatStr = null) {
  const strNum = num.toString().trim();
  if (isNaN(num) || strNum.length === 0) return num;
  let suffix = "";
  if (strNum.endsWith("000000"))
    // milyonuncu
    suffix = "cu";
  else if (strNum.endsWith("000"))
    //mininci
    suffix = "ci";

  if (!suffix) {
    const lastTwoSymbols = strNum.substring(strNum.length - 2);
    if (lastTwoSymbols.length === 2 && !lastTwoSymbols.includes(".")) {
      switch (lastTwoSymbols) {
        case "00": // yuzuncu
          suffix = "cü";
          break;
        case "10":
        case "30":
          suffix = "cu";
          break;
        case "20":
        case "50":
        case "70":
        case "80":
          suffix = "ci";
          break;
        case "40":
        case "60":
        case "90":
          suffix = "cı";
          break;
        default:
          break;
      }
    }

    if (!suffix) {
      const lastSymbol = strNum.substring(strNum.length - 1);
      switch (lastSymbol) {
        case "0":
        case "6":
          suffix = "cı";
          break;
        case "1":
        case "2":
        case "5":
        case "7":
        case "8":
          suffix = "ci";
          break;
        case "3":
        case "4":
          suffix = "cü";
          break;
        case "9":
          suffix = "cu";
          break;
        default:
          break;
      }
    }
  }

  let result = `${strNum}-${suffix}`;
  if (concatStr) result = `${result} ${concatStr}`;
  return result;
}
