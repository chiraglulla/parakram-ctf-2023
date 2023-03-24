const fpPromise = import('https://fpjscdn.net/v3/CQI5ifQww193uuvmU4S:d23QzcmWi9kZLacD2261')
    .then(FingerprintJS => FingerprintJS.load())

  // Analyze the visitor when necessary.
  fpPromise
    .then(fp => fp.get())
    .then(result => console.log(result.requestId, result.visitorId))