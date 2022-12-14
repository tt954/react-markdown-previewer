import React, { useState } from "react";
import DOMPurify from "dompurify";
import { marked } from "marked";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import Card from "./components/Card";
import Options from "./components/Options";

import "./css/index.css";
import { light, dark } from "./css/themes";
import { placeholder } from "./constants";

export default function App() {
  const [theme, setTheme] = useState(true);
  const [text, setText] = useState(placeholder);
  const appliedTheme = createTheme(theme ? light : dark);

  return (
    <ThemeProvider theme={appliedTheme}>
      <main class="main__container">
        <Stack
          spacing={4}
          direction={{ sm: "column", md: "row" }}
          sx={{ width: "100%" }}
        >
          <Card headerText="Editor">
            <TextareaAutosize
              id="editor"
              placeholder="Insert markdown here to preview"
              rows={10}
              defaultValue={placeholder}
              onChange={(e) => setText(e.target.value)}
              value={text}
              style={{ width: 200 }}
            />
          </Card>

          <Card headerText="Previewer">
            <Paper
              sx={{ p: "0.5em 2em 2em", minHeight: "100vh" }}
              id="previewer"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(marked.parse(text))
              }}
            />
          </Card>
        </Stack>
        <Options resetEditor={() => setText(placeholder)} />
      </main>
    </ThemeProvider>
  );
}
