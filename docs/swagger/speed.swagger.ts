/**
 * @swagger
 * /api/speed/all:
 *   get:
 *     tags:
 *       - Speed
 *     summary: Get all speed records
 *     description: Returns a list of all speed records
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
 *                       speed:
 *                         type: integer
 *                         example: 5
 *                       max_Speed:
 *                         type: integer
 *                         example: 6
 *                       average_Speed:
 *                         type: integer
 *                         example: 7
 *                       timestamp:
 *                         type: string
 *                         format: date-time
 *                         example: 2023-07-01T11:00:00.000Z
 *                       raceId:
 *                         type: integer
 *                         example: 1
 */

/**
 * @swagger
 * /api/speed/all/{id}:
 *   get:
 *     tags:
 *       - Speed
 *     summary: Get speed record by ID
 *     description: Returns a single speed record by its ID
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
 *         description: ID of the speed record to return
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
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         example: 3
 *                       speed:
 *                         type: integer
 *                         example: 10
 *                       max_Speed:
 *                         type: integer
 *                         example: 20
 *                       average_Speed:
 *                         type: integer
 *                         example: 15
 *                       timestamp:
 *                         type: string
 *                         format: date-time
 *                         example: 2023-07-01T11:00:00.000Z
 *                       raceId:
 *                         type: integer
 *                         example: 3
 */

/**
 * @swagger
 * /api/speed/all/race/{id}:
 *   get:
 *     tags:
 *       - Speed
 *     summary: Get all speed records for a specific race
 *     description: Returns a list of all speed records for a specific race by its ID
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
 *         description: ID of the race to get the speed records for
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: List of all speed records for the specified race
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
 *                         example: 3
 *                       speed:
 *                         type: integer
 *                         example: 10
 *                       max_Speed:
 *                         type: integer
 *                         example: 20
 *                       average_Speed:
 *                         type: integer
 *                         example: 15
 *                       timestamp:
 *                         type: string
 *                         format: date-time
 *                         example: 2023-07-01T11:00:00.000Z
 *                       raceId:
 *                         type: integer
 *                         example: 3
 */
