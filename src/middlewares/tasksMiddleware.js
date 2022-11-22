const validateBody = (request, response, next) => {
  const { body } = request;

  if (body.title === undefined) {
    return response
      .status(400)
      .json({ message: 'the field "tittle" is required' });
  }

  if (body.title === "") {
    return response.status(400).json({ message: "tittle cannot be empty" });
  }

  next();
};

const validateStatus = (request, response, next) => {
  const { body } = request;

  if (body.status === undefined) {
    return response
      .status(400)
      .json({ message: 'the field "status" is required' });
  }

  if (body.status === "") {
    return response.status(400).json({ message: "status cannot be empty" });
  }
  next();
};

module.exports = {
  validateBody,
  validateStatus
};
