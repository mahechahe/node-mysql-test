import { Router } from 'express';
import { getEmployees, createEmployees, updateEmployee, delteEmployee, getEmployeeById } from '../controllers/employees.controller.js';

const router = Router()

router.get('/', getEmployees)
router.get('/:id', getEmployeeById)
router.delete('/:id', delteEmployee)
router.patch('/:id', updateEmployee)
router.post('/', createEmployees)


export default router