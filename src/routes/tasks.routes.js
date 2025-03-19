import { Router } from "express";
import {
  createTask,
  deleteTask,
  getTask,
  getTasks,
  updateTask,
} from "../controllers/tasks.controllers.js";
import { auth } from "../middlewares/auth.middleware.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { createTaskSchema, updateTaskSchema } from "../schemas/task.schema.js";  // ✅ Importando ambos esquemas

const router = Router();

router.get("/tasks", auth, getTasks);
router.post("/tasks", auth, validateSchema(createTaskSchema), createTask);
router.get("/tasks/:id", auth, getTask);
router.put("/tasks/:id", auth, validateSchema(updateTaskSchema), updateTask);  // ✅ Usando el esquema correcto
router.delete("/tasks/:id", auth, deleteTask);

export default router;


//cambios c+z