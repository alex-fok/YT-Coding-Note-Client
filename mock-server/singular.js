// Credit to narugami: https://github.com/typicode/json-server/issues/541

module.exports = (req, res, next) => {
  const _send = res.send
  res.send = function (data) {
    const isSingular = require('url').parse(req.url, true).query['singular'];
    if (!isSingular) return _send.call(this, data);
    try {
      const json = JSON.parse(data);
      if (json instanceof Array) {
        return json.length === 1 ?
          _send.call(this, JSON.stringify(json[0])) :
          _send.call(this, '{}', 404)
      }
    } catch(e) {}
    return _send.call(this, data);
  }
  next();
}
