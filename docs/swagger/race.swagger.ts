/**
 * @swagger
 * /api/race/all:
 *   get:
 *     tags:
 *       - Race
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
 * /api/race/{id}:
 *   get:
 *     tags:
 *       - Race
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
 *                       example: 1
 *                     timestamp:
 *                       type: string
 *                       format: date-time
 *                       example: 2024-01-08T11:59:48.000Z
 *                     start_Time:
 *                       type: string
 *                       format: date-time
 *                       example: 2024-01-08T11:59:48.000Z
 *                     end_Time:
 *                       type: string
 *                       format: date-time
 *                       example: 2024-01-08T14:59:48.000Z
 *                     distance:
 *                       type: integer
 *                       example: 200
 *                     speeds:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           id:
 *                             type: integer
 *                             example: 1
 *                           speeds:
 *                             type: array
 *                             items:
 *                               type: object
 *                               properties:
 *                                 date:
 *                                   type: string
 *                                   format: date-time
 *                                   example: 2024-07-11T18:00:00.000Z
 *                                 speed:
 *                                   type: integer
 *                                   example: 12
 *                           max_Speed:
 *                             type: integer
 *                             example: 15
 *                           average_Speed:
 *                             type: number
 *                             format: float
 *                             example: 13.5
 *                           timestamp:
 *                             type: string
 *                             format: date-time
 *                             example: 2024-01-08T11:59:48.000Z
 *                           raceId:
 *                             type: integer
 *                             example: 1
 */
