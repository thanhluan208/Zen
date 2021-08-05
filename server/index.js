import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'

import postRoutes from './routes/posts.js'

const app = express();


app.use(bodyParser.json())
app.use(bodyParser.json({extended:true}))
app.use(cors())

app.use('/reservation',postRoutes)
const CONNECTION_URL = 'mongodb+srv://thanhluan123:handsomeboy@cluster0.evllk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
        .then(() => app.listen(PORT, () => console.log(`server running on port ${PORT}`)))
        .then ((error) => console.log(error.message))

mongoose.set('useFindAndModify', false)