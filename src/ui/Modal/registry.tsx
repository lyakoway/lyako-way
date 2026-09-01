import type { ReactElement } from "react";

import ClimateControl from "src/components/Window/ClimateControl";
import { ModalImage } from "src/widgets/PortfolioProject/style";
import { PdfModal, PdfModalHead, PdfFrame } from "src/widgets/Resume/style";
import PdfViewer from "src/components/PdfViewer";
import { useMediaQuery } from "src/features/customHooks";
import type { ModalDescriptor } from "src/reducers/modal-slice";

// Рендер контента модалки по сериализуемому дескриптору из стора.
// Сами компоненты живут здесь — в сторе только type + data (строки),
// чтобы состояние осталось сериализуемым (см. modal-slice).

const PdfContent = ({
  url,
  title,
  downloadName,
}: {
  url: string;
  title: string;
  downloadName: string;
}) => {
  // На тач-устройствах iframe открывается неохотно — PdfViewer с канвасом.
  const isTouch = useMediaQuery("(pointer: coarse)");
  return (
    <PdfModal>
      <PdfModalHead>{title}</PdfModalHead>
      {isTouch ? (
        <PdfViewer url={url} fallbackHref={url} downloadName={downloadName} />
      ) : (
        <PdfFrame src={url} title={title} />
      )}
    </PdfModal>
  );
};

export function renderModalContent(descriptor: ModalDescriptor): ReactElement {
  switch (descriptor.type) {
    case "climate":
      return <ClimateControl />;
    case "image":
      return (
        <ModalImage>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={descriptor.data?.src ?? ""}
            alt={descriptor.data?.alt ?? ""}
          />
        </ModalImage>
      );
    case "pdf":
      return (
        <PdfContent
          url={descriptor.data?.url ?? ""}
          title={descriptor.data?.title ?? ""}
          downloadName={descriptor.data?.downloadName ?? ""}
        />
      );
    default:
      return <></>;
  }
}
