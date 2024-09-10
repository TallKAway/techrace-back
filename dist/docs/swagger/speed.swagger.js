"use strict";
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
 * /api/speed/{id}:
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
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       example: 2
 *                     speeds:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           date:
 *                             type: string
 *                             format: date-time
 *                             example: 2024-07-11T18:00:00
 *                           speed:
 *                             type: integer
 *                             example: 18
 *                     max_Speed:
 *                       type: integer
 *                       example: 20
 *                     average_Speed:
 *                       type: integer
 *                       example: 18
 *                     timestamp:
 *                       type: string
 *                       format: date-time
 *                       example: 2024-01-11T14:59:48.000Z
 *                     raceId:
 *                       type: integer
 *                       example: 2
 */
/**
 * @swagger
 * /api/speed/race/{id}:
 *   get:
 *     tags:
 *       - Speed
 *     summary: Get speed record by race ID
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
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       example: 2
 *                     speeds:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           date:
 *                             type: string
 *                             format: date-time
 *                             example: 2024-07-11T18:00:00
 *                           speed:
 *                             type: integer
 *                             example: 18
 *                     max_Speed:
 *                       type: integer
 *                       example: 20
 *                     average_Speed:
 *                       type: integer
 *                       example: 18
 *                     timestamp:
 *                       type: string
 *                       format: date-time
 *                       example: 2024-01-11T14:59:48.000Z
 *                     raceId:
 *                       type: integer
 *                       example: 2
 */
