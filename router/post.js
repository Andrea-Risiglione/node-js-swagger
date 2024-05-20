import { Router } from "express";
const postRouter = Router();

/** import all controllers */
import * as controller from '../controllers/postController.js';



/** POST Methods */
/**
 * @openapi
 * '/api/post':
 *  post:
 *     tags:
 *     - Post Controller
 *     summary: Create a post
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - title
 *              - description
 *              - content
 *              - author
 *            properties:
 *              title:
 *                type: string
 *                default: title
 *              description:
 *                type: string
 *                default: description
 *              content:
 *                type: string
 *                default: content
 *              author:
 *                type: string
 *                default: author
 *     responses:
 *      201:
 *        description: Created
 *      409:
 *        description: Conflict
 *      404:
 *        description: Not Found
 *      500:
 *        description: Server Error
 */
postRouter.route('/').post(controller.create); // create post or content

/** GET Methods */
/**
 * @openapi
 * '/api/post/{userId}':
 *  get:
 *     tags:
 *     - Post Controller
 *     summary: Get all user posts
 *     parameters:
 *      - name: userId
 *        in: path
 *        description: The id of the user
 *        required: true
 *     responses:
 *      200:
 *        description: Created
 *      409:
 *        description: Conflict
 *      404:
 *        description: Not Found
 *      500:
 *        description: Server Error
 */
postRouter.route('/:userId').get(controller.getUserPosts) // get all user posts with username

/**
 * @openapi
 * '/api/post/{userId}/{postId}':
 *  get:
 *     tags:
 *     - Post Controller
 *     summary: Get a single user post
 *     parameters:
 *      - name: userId
 *        in: path
 *        description: The id of the user
 *        required: true
 *      - name: postId
 *        in: path
 *        description: The id of the post
 *        required: true
 *     responses:
 *      200:
 *        description: Created
 *      409:
 *        description: Conflict
 *      404:
 *        description: Not Found
 *      500:
 *        description: Server Error
 *     
 */
postRouter.route('/:userId/:postId').get(controller.getUserPost) // get a single user post with username and post id


/** PUT Methods */
/**
 * @openapi
 * '/api/post/update':
 *  put:
 *     tags:
 *     - Post Controller
 *     summary: Modify a post
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - postId
 *            properties:
 *              postId:
 *                type: string
 *                default: ''
 *              title:
 *                type: string
 *                default: ''
 *              description:
 *                type: string
 *                default: ''
 *              content:
 *                type: string
 *                default: ''
 *              author:
 *                type: string
 *                default: ''
 *     responses:
 *      201:
 *        description: Created
 *      409:
 *        description: Conflict
 *      404:
 *        description: Not Found
 *      500:
 *        description: Server Error
 */
postRouter.route('/update').put(controller.updatePost); // is use to update the post

/** DELETE Methods */
/**
 * @openapi
 * '/api/post/{postId}':
 *  delete:
 *     tags:
 *     - Post Controller
 *     summary: Delete a post
 *     parameters:
 *      - name: postId
 *        in: path
 *        description: The id of the post
 *        required: true
 *     responses:
 *      200:
 *        description: Deleted
 *      400:
 *        description: Bad Request
 *      404:
 *        description: Not Found
 *      500:
 *        description: Server Error
 */
postRouter.route('/:postId').delete(controller.deletePost); // is use to delete the post



export default postRouter;