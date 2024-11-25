import { IconButton } from "@mui/material";
import { JournalLayout } from "../layout/JournalLayout";
import { NoteView } from "../views/NoteView";
import { NothingSelectedView } from "../views/NothingSelectedView";
import { AddCardOutlined, AddOutlined } from "@mui/icons-material";

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography >Anim consequat laborum consequat commodo laborum consectetur officia anim. Laborum quis voluptate enim velit aliqua cupidatat in. Eiusmod adipisicing in veniam aliqua tempor dolore aute. Incididunt non consequat aliqua mollit ipsum. Deserunt occaecat aute eiusmod fugiat labore. Est cupidatat cupidatat Lorem esse incididunt anim est occaecat elit.</Typography> */}

      {/* <NothingSelectedView /> */}

      <NoteView />

      <IconButton
        size="large"
        sx={{
          width: "larg",
          backgroundColor: "primary.main",
          ":hover": { backgroundColor: "primary.dark", opacity: 0.8 },
          color: "white",
          position: "fixed",
          bottom: 20,
          right: 20,
        }}
      >
        <AddOutlined />
      </IconButton>
    </JournalLayout>
  );
};
