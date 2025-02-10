const express = require("express");
const { createRequest, getRequests, updateRequest } = require("../controllers/requestController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

/**
 * @swagger
 * /requests:
 *   post:
 *     summary: Create a new Zoom request
 *     tags: [Requests]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               eventName:
 *                 type: string
 *               eventTime:
 *                 type: string
 *                 format: date-time
 *               duration:
 *                 type: integer
 *               serviceUnit:
 *                 type: string
 *               picName:
 *                 type: string
 *               picPhone:
 *                 type: string
 *     responses:
 *       201:
 *         description: Request created successfully
 */
router.post("/", createRequest);

/**
 * @swagger
 * /requests:
 *   get:
 *     summary: Get all Zoom requests
 *     tags: [Requests]
 *     responses:
 *       200:
 *         description: List of Zoom requests
 */
router.get("/", getRequests);

/**
 * @swagger
 * /requests/{id}:
 *   put:
 *     summary: Update a Zoom request (Admin only)
 *     tags: [Requests]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               zoomLink:
 *                 type: string
 *               status:
 *                 type: string
 *                 enum: [Waiting, Approved, On Going, Expired]
 *     responses:
 *       200:
 *         description: Request updated successfully
 *       401:
 *         description: Unauthorized
 */
router.put("/:id", authMiddleware, updateRequest);

module.exports = router;
