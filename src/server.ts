import app from './app'

const PORT = Number(process.env.PORT) || 3000

app.listen(PORT, () =>
  console.log(
    '\x1b[35m',
    'application started at : ',
    '\x1b[34m',
    `http://localhost:${PORT}`,
    '\x1b[0m',
  ),
)
