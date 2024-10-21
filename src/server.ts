import express, { Express, Request, Response } from 'express'
import path from 'path'
import {postRouter} from './PostApp/postRouter'



const app: Express = express()
const PORT = 8000
const HOST = 'localhost'

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'templates'))

app.use('/static/', express.static(path.join(__dirname, 'static')))
app.use(express.json())
app.use('/post/', postRouter)

app.get('/', (req: Request, res: Response) => {
    res.render('index')
})

app.listen(PORT, HOST, () => {
    console.log(`Server running at http://${HOST}:${PORT}/`)
});