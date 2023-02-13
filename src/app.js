import express from 'express';
import employeesRoutes from './routes/employees.routes.js';
import indexRoutes from './routes/index.routes.js';
import './config.js'

const app = express()
app.use(express.json())

app.use('/api/employees', employeesRoutes)
app.use('/api/ping', indexRoutes)

app.use((req, res, next) => {
    res.status(404).json({
        message: 'enpoint not found'
    })
})

export default app