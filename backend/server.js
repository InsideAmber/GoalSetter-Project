import express from 'express'
import colors from 'colors'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import goalRouter from './routes/goalRoutes.js'
import userRouter from './routes/userRoutes.js'
import { errorHandler } from './middleware/errorMiddleware.js'
dotenv.config()
const port = process.env.PORT || 5000

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/goals', goalRouter)
app.use('/api/users', userRouter)

app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))
