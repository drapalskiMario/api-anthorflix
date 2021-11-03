import 'dotenv/config'
import { connect } from 'mongoose'
import { app } from './app'

(async () => {
  try {
    await connect(process.env.MONGO_URI)
    console.log('Database connected')

    app.listen(process.env.PORT || 3000)
    console.log('server running')
  } catch (error) {
    console.error(error)
  }
})()
