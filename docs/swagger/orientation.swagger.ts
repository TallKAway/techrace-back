/**
 * @swagger
 * /api/orientation/all:
 *   get:
 *     tags:
 *       - Orientation
 *     summary: Get all orientation records
 *     description: Returns a list of all orientation records
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
 *         description: List of all orientation records
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
 *                         example: 2023-07-01T11:00:00.000Z
 *                       orientation:
 *                         type: string
 *                         example: "NORTH"
 *                       speed:
 *                         type: integer
 *                         example: 5
 *                       raceId:
 *                         type: integer
 *                         example: 1
 */

/**
 * @swagger
 * /api/orientation/all/{id}:
 *   get:
 *     tags:
 *       - Orientation
 *     summary: Get orientation record by ID
 *     description: Returns a single orientation record by its ID
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
 *         description: ID of the orientation record to return
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
 *                         example: 2
 *                       timestamp:
 *                         type: string
 *                         format: date-time
 *                         example: 2023-07-01T11:01:00.000Z
 *                       orientation:
 *                         type: string
 *                         example: "EAST"
 *                       speed:
 *                         type: integer
 *                         example: 5
 *                       raceId:
 *                         type: integer
 *                         example: 1
 */

/**
 * @swagger
 * /api/orientation/all/race/{id}:
 *   get:
 *     tags:
 *       - Orientation
 *     summary: Get all orientation records for a specific race
 *     description: Returns a list of all orientation records for a specific race by its ID
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
 *         description: ID of the race to get the orientation records for
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: List of all orientation records for the specified race
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
 *                         example: 2023-07-01T11:00:00.000Z
 *                       orientation:
 *                         type: string
 *                         example: "NORTH"
 *                       speed:
 *                         type: integer
 *                         example: 5
 *                       raceId:
 *                         type: integer
 *                         example: 1
 */
