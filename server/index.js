import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import session from 'express-session'
import cookieParser from 'cookie-parser'
import messagesRouter from './messages/messagesIndex.js'


const port = process.env.PORT || 8088
const cookieSecret = process.env.COOKIE_SECRET || 'secret'

const app = express()

app.use(express.json())
app.use(cookieParser(cookieSecret))

//CORS
const whitelist = process.env.WHITELISTED_DOMAINS
  ? process.env.WHITELISTED_DOMAINS.split(",")
  : []
// Set CORS options
const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};

// Use CORS
app.use(cors(corsOptions))

// Sessions, default
app.use(session({}))

app.use('/messages', messagesRouter)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

try {
  const mongoURL = process.env.MONGODB_URL || ""
  await mongoose.connect(mongoURL)
  console.log(`Template connected to database ${mongoURL}`)

  app.listen(port, () => {
    console.log(`Template app listening on port ${port}`)
  })
}
catch(err) {
  console.log(err)
}

