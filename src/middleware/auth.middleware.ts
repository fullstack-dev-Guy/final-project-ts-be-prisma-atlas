export const isAuth = (req, res, next) => {
  if (req.session.user) {
    return next()
  } else {
    const error = new Error('You are not authenticated')
    error.message
    return next(error)
  }
}
