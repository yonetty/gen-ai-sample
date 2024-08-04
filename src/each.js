function each(strings, ...values) {
  return (callback) => {
    // 入力が空の場合は何もしない
    if (strings.length <= 1 && values.length === 0) {
      return;
    }

    // ヘッダー行を取得し、トリムして分割
    const headers = strings[0].trim().split(/\s*\|\s*/);

    // データ行を処理
    for (let i = 0; i < values.length; i += headers.length) {
      const data = {};
      for (let j = 0; j < headers.length; j++) {
        data[headers[j]] = values[i + j];
      }
      callback(data);
    }
  };
}

module.exports = {
  each,
};
