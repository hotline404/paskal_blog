function genRandomNum() {
  const randomNum = new Uint32Array(10);
  const cryptoRandomNum = window.crypto(randomNum);

  return cryptoRandomNum;
}

export default genRandomNum
