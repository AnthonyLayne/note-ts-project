import { createContext, ReactNode, useCallback, useMemo, useState } from "react";

// Services
import { apiCreateNote } from "src/services";

// Helpers
import { useSafeContext } from "src/context/useSafeContext";

// Types
import { Note } from "types";

export type BaseNotesContext = {
  notes: Record<string, Note>;
  createNote: ({ title, description }: Pick<Note, "title" | "description">) => Promise<Note>;
  // editNote: ({ id, title, description }: Pick<Note, "id" | "title" | "description">) => Promise<Note>;
  // deleteNote: (id: string) => Promise<void>;
};

const NotesContext = createContext<Maybe<BaseNotesContext>>(undefined);
NotesContext.displayName = "NotesContext";

export const useNotesContext = () => useSafeContext(NotesContext);

type TProps = {
  children: ReactNode;
};

export const NotesContextProviderComponent = ({ children }: TProps) => {
  const [notes, setNotes] = useState<Record<string, Note>>({});

  const createNote = useCallback(async (note: Pick<Note, "title" | "description">) => {
    const createdNote = await apiCreateNote(note);
    setNotes((prev) => ({
      ...prev,
      [createdNote.id]: createdNote,
    }));

    return createdNote;
  }, []);

  const ctx = useMemo(
    () => ({
      notes,
      createNote,
      // editNote,
      // deleteNote,
    }),
    [
      notes,
      createNote,
      // editNote,
      // deleteNote,
    ]
  );

  return <NotesContext.Provider value={ctx}>{children}</NotesContext.Provider>;
};
