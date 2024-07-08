/**
 * @swagger
 * /race/all:
 *   get:
 *     summary: Get all races
 *     description: Returns a list of all races
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: x-api-key
 *         in: header
 *         description: API key needed to access the endpoint
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: successful operation
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         example: 1
 *                       timestamp:
 *                         type: string
 *                         format: date-time
 *                         example: 2023-07-01T10:00:00.000Z
 *                       start_Time:
 *                         type: string
 *                         format: date-time
 *                         example: 2023-07-01T10:00:00.000Z
 *                       end_Time:
 *                         type: string
 *                         format: date-time
 *                         example: 2023-07-01T10:30:00.000Z
 *                       distance:
 *                         type: integer
 *                         example: 5
 */

/**
 * @swagger
 * /race/{id}:
 *   get:
 *     summary: Get race by ID
 *     description: Returns a single race by its ID
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: x-api-key
 *         in: header
 *         description: API key needed to access the endpoint
 *         required: true
 *         type: string
 *       - name: id
 *         in: path
 *         description: ID of the race to return
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: successful operation
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       example: 3
 *                     timestamp:
 *                       type: string
 *                       format: date-time
 *                       example: 2023-07-01T11:00:00.000Z
 *                     start_Time:
 *                       type: string
 *                       format: date-time
 *                       example: 2023-07-01T11:00:00.000Z
 *                     end_Time:
 *                       type: string
 *                       format: date-time
 *                       example: 2023-07-01T11:05:00.000Z
 *                     distance:
 *                       type: integer
 *                       example: 54546
 */
