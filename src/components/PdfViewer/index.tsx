import React, { useEffect, useRef, useState } from "react";

import {
  PdfViewerWrap,
  PdfCanvasList,
  PdfMessage,
  PdfMessageLink,
} from "./style";

// Клиентский рендер PDF через PDF.js (canvas). В отличие от <iframe>/<embed>
// работает везде — включая мобильные и встроенные браузеры, где нативный
// просмотрщик PDF недоступен. Файл берётся с того же origin.
const WORKER_SRC = "/static/pdf.worker.min.mjs";

interface Props {
  url: string;
  // Ссылка «скачать», показывается если рендер не удался.
  fallbackHref?: string;
  downloadName?: string;
}

const PdfViewer: React.FC<Props> = ({ url, fallbackHref, downloadName }) => {
  const listRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">(
    "loading"
  );

  useEffect(() => {
    let cancelled = false;

    const render = async () => {
      try {
        const pdfjs = await import("pdfjs-dist");
        pdfjs.GlobalWorkerOptions.workerSrc = WORKER_SRC;

        const pdf = await pdfjs.getDocument({ url }).promise;
        if (cancelled) return;

        const list = listRef.current;
        if (!list) return;
        list.innerHTML = "";

        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        const cssWidth = Math.min(list.clientWidth || 600, 820);

        for (let i = 1; i <= pdf.numPages; i += 1) {
          if (cancelled) return;
          const page = await pdf.getPage(i);
          const base = page.getViewport({ scale: 1 });
          const viewport = page.getViewport({
            scale: (cssWidth / base.width) * dpr,
          });

          const canvas = document.createElement("canvas");
          canvas.width = Math.floor(viewport.width);
          canvas.height = Math.floor(viewport.height);
          const ctx = canvas.getContext("2d");
          if (!ctx) continue;

          list.appendChild(canvas);
          await page.render({ canvasContext: ctx, viewport }).promise;
          if (cancelled) return;
          setStatus("ready");
        }
      } catch {
        if (!cancelled) setStatus("error");
      }
    };

    render();
    return () => {
      cancelled = true;
    };
  }, [url]);

  return (
    <PdfViewerWrap>
      {status === "loading" && <PdfMessage>Загрузка…</PdfMessage>}

      {status === "error" && (
        <PdfMessage>
          Не удалось отобразить PDF.
          {fallbackHref && (
            <PdfMessageLink href={fallbackHref} download={downloadName}>
              Скачать резюме
            </PdfMessageLink>
          )}
        </PdfMessage>
      )}

      <PdfCanvasList ref={listRef} />
    </PdfViewerWrap>
  );
};

export default PdfViewer;
