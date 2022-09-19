const Send = (res, Response) => {
  res
    .status(Response.status || 500)
    .send(Response);

  return;
}

module.exports = Send;