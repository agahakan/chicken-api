const express = require('express');
const {
  getAllChickens,
  getChickenById,
  createChicken,
  updateChickenById,
  updateChickenStepsById,
  deleteChickenById,
} = require('../controllers/chickenController');
const { getChickenByIdMiddleware } = require('../middlewares/getChickenByIdMiddleware');

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Chicken
 *   description: Chicken management
 * components:
 *   schemas:
 *     Error:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *       example:
 *         message: Chicken not found
 *     Chicken:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *         birthday:
 *           type: string
 *           format: date
 *         weight:
 *           type: number
 *         steps:
 *           type: number
 *         isRunning:
 *           type: boolean
 *       required:
 *         - name
 *         - weight
 *       example:
 *         name: Chicken 1
 *         birthday: '2022-01-01'
 *         weight: 2.5
 *         steps: 0
 *         isRunning: false
 */

/**
 * @swagger
 * /chicken:
 *   get:
 *     summary: Get all chickens
 *     tags: [Chicken]
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Chicken'
 *               example:
 *                 - name: Chicken 1
 *                   birthday: '2022-01-01'
 *                   weight: 2.5
 *                   steps: 10
 *                   isRunning: false
 *                 - name: Chicken 2
 *                   birthday: '2022-02-01'
 *                   weight: 3.2
 *                   steps: 5
 *                   isRunning: true
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.get('/', getAllChickens);

/**
 * @swagger
 * /chicken/{id}:
 *   get:
 *     summary: Get a specific chicken by ID
 *     tags: [Chicken]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the chicken
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Chicken'
 *             example:
 *               name: Chicken 1
 *               birthday: '2022-01-01'
 *               weight: 2.5
 *               steps: 10
 *               isRunning: false
 *       404:
 *         description: Chicken not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.get('/:id', getChickenByIdMiddleware, getChickenById);

/**
 * @swagger
 * /chicken:
 *   post:
 *     summary: Create a new chicken
 *     tags: [Chicken]
 *     requestBody:
 *       description: Chicken object to be created
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Chicken'
 *           example:
 *             name: Chicken 1
 *             birthday: '2022-01-01'
 *             weight: 2.5
 *             isRunning: false
 *     responses:
 *       201:
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Chicken'
 *             example:
 *               name: Chicken 1
 *               birthday: '2022-01-01'
 *               weight: 2.5
 *               steps: 0
 *               isRunning: false
 *       400:
 *         description: Bad Request
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.post('/', createChicken);

/**
 * @swagger
 * /chicken/{id}/run:
 *   put:
 *     summary: Increase the steps of a specific chicken by ID
 *     tags: [Chicken]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the chicken
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Chicken'
 *             example:
 *               name: Chicken 1
 *               birthday: '2022-01-01'
 *               weight: 2.5
 *               steps: 11
 *               isRunning: false
 *       404:
 *         description: Chicken not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.put('/:id/run', getChickenByIdMiddleware, updateChickenStepsById);

/**
 * @swagger
 * /chicken/{id}:
 *   patch:
 *     summary: Update a specific chicken's properties by ID
 *     tags: [Chicken]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the chicken
 *     requestBody:
 *       description: Chicken properties to be updated
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Chicken'
 *           example:
 *             name: Updated Chicken 1
 *             weight: 2.8
 *             isRunning: true
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Chicken'
 *             example:
 *               name: Updated Chicken 1
 *               birthday: '2022-01-01'
 *               weight: 2.8
 *               steps: 10
 *               isRunning: true
 *       400:
 *         description: Bad Request
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.patch('/:id', getChickenByIdMiddleware, updateChickenById);

/**
 * @swagger
 * /chicken/{id}:
 *   delete:
 *     summary: Delete a specific chicken by ID
 *     tags: [Chicken]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the chicken
 *     responses:
 *       204:
 *         description: No Content
 *       404:
 *         description: Chicken not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.delete('/:id', getChickenByIdMiddleware, deleteChickenById);

module.exports = router;