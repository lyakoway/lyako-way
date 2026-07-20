import React from "react";

import { Portrait } from "./style";

// Путь к картинке-аватару (файл: public/static/avatar/me.png).
const AVATAR_SRC = "/static/avatar/me.png";

const AvatarHead = () => (
  <Portrait src={AVATAR_SRC} alt="Аватар — Мазуренко Алексей" draggable={false} />
);

export default AvatarHead;
