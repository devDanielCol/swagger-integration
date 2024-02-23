import { Router } from "express";
import SessionMiddleware from "../Middleware/session.js";
import { AuthService } from "../controller/auth.service.js";

const apiAuth = Router();

/**
 * @openapi
 * tags:
 *  name: Auth
 *  description: User auth methods
 *
 * /auth/me:
 *   get:
 *     tags:
 *       - Auth
 *     description: Returns the user info
 *     security:
 *       - api_key: []
 *     responses:
 *       200:
 *         description: User Info
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                    name:
 *                      type: string
 *                      example: Daniel
 */
apiAuth.get("/me", SessionMiddleware, (req, resp) => {
  return resp.status(200).json(req.session);
});

/**
 * @openapi
 *
 * /auth/login:
 *   post:
 *     tags:
 *       - Auth
 *     description: Auth login
 *     requestBody:
 *        content:
 *            application/json:
 *               schema:
 *                  type: object
 *                  properties:
 *                     username:
 *                        type: string
 *                        example: "user@gmail.com"
 *                     password:
 *                        types: string
 *                        example: "123"
 *            multipart/form-data:
 *               schema:
 *                  type: object
 *                  properties:
 *                     username:
 *                        type: string
 *                        example: "user@gmail.com"
 *                     password:
 *                        types: string
 *                        example: 123
 *     responses:
 *       200:
 *         description: User Info
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                    name:
 *                      type: string
 *                      example: Daniel
 */
apiAuth.post("/login", (req, resp) => {
  const { username, password } = req.body;
  try {
    const userInfo = AuthService.Loging({ username, password });
    return resp.status(200).json(userInfo);
  } catch {
    return resp
      .status(401)
      .json({ error: "Verify your username ore password." });
  }
});

export default apiAuth;
