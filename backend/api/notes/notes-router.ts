import { Request, Response, NextFunction, ErrorRequestHandler } from "express";
export {};

const router = require("express").Router();
const NOTE = require("./notes-model");

router.get("/", (req: Request, res: Response, next: NextFunction) => {
  NOTE.getAllNotes(req.params.notes)
    .then((notes: Array<object>) => {
      if (!notes) return res.status(404);
      return res.status(200).json(notes);
    })
    .catch(next);
});

router.get("/:user_username", (req: Request, res: Response, next: NextFunction) => {
  NOTE.getAllUserNotes(req.params.user_username)
    .then((notes: Array<object>) => {
      if (!notes) return res.status(404);
      return res.status(200).json(notes);
    })
    .catch(next);
});

router.get("/:note_id", (req: Request, res: Response, next: NextFunction) => {
  NOTE.getNoteById(req.params.note_id)
    .then((note: object) => {
      if (!note) return res.status(404);
      return res.status(200).json(note);
    })
    .catch(next);
});

router.post("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const newNote = await NOTE.addNote({
      note_description: req.body.note_description,
      note_title: req.body.note_title,
      user_username: req.body.user_username,
    });
    res.status(201).json(newNote);
  } catch (err) {
    next(err);
  }
});

router.delete("/:note_id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    await NOTE.deleteById(req.params.note_id);
    //res.json(req.note);
  } catch (err) {
    next(err);
  }
});

router.use((err: ErrorRequestHandler, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({
    message: "err in note router",
  });
});

module.exports = router;
