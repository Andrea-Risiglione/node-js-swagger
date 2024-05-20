import { Router } from 'express';
const commentRouter = Router();

/** import all controllers */
import * as controller from '../controllers/commentController.js';

/** POST Methods */
/**
 * @openapi
 * '/api/comment':
 *  post:
 *     tags:
 *     - Comment Controller
 *     summary: Create a comment
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - content
 *              - author
 *              - post
 *            properties:
 *              content:
 *                type: string
 *                default: "media file link"
 *              author:
 *                type: string
 *                default: ""
 *              post:
 *                type: string
 *                default: ""
 *     responses:
 *      201:
 *        description: Post created
 *      500:
 *        description: Internal Server Error
 */
commentRouter.route('/').post(controller.create); // create a post's comment

/** GET Methods */
/** 
 * @openapi
 * '/api/comment/{postId}':
 *  get:
 *     tags:
 *     - Comment Controller
 *     summary: Get all post's comments
 *     parameters:
 *      - name: postId
 *        in: path
 *        description: The id of the post
 *        required: true
 *     responses:
 *      201:
 *        description: Created
 *      404:
 *        description: Not Found
 *      500:
 *        description: Server Error
 *      501:
 *        description: Not Implemented
 */
commentRouter.route('/:postId').get(controller.getPostComments); // get all post's comments by postId

/**
 * @openapi
 * '/api/comment/{commentId}':
 *  get:
 *     tags:
 *     - Comment Controller
 *     summary: Get a single user post's comment
 *     parameters:
 *      - name: commentId
 *        in: path
 *        description: The id of the comment
 *        required: true
 *     responses:
 *      201:
 *        description: Created
 *      404:
 *        description: Not Found
 *      500:
 *        description: Server Error
 *      501:
 *        description: Not Implemented
 */
commentRouter.route('/:commentId').get(controller.getComment); // get a single user post's comment with commentId. TO BE IMPLEMENTED!

/** PUT Methods */
/**
 * @openapi
 * '/api/comment/update':
 *  put:
 *     tags:
 *     - Comment Controller
 *     summary: Modify a comment
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - commentId
 *            properties:
 *              commentId:
 *                type: string
 *                default: ''
 *              content:
 *                type: string
 *                default: ''
 *     responses:
 *      201:
 *        description: Created
 *      401:
 *        description: Unauthorized
 *      404:
 *        description: Not Found
 */
commentRouter.route('/update').put(controller.updateComment); // is use to update the post's comment

/** DELETE Methods */
/**
 * @openapi
 * '/api/comment/{commentId}':
 *  delete:
 *     tags:
 *     - Comment Controller
 *     summary: Delete a comment
 *     parameters:
 *      - name: commentId
 *        in: path
 *        description: The id of the comment
 *        required: true
 *     responses:
 *      201:
 *        description: Created
 *      401:
 *        description: Unauthorized
 *      404:
 *        description: Not Found
 */
commentRouter.route('/:commentId').delete(controller.deleteComment); // is use to delete the post's comment

export default commentRouter;
