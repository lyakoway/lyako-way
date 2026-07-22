import styled from "styled-components";

export const PdfViewerWrap = styled.div`
  position: relative;
  flex: 1;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  background: #2b2b2f;
  padding: 12px;
`;

export const PdfCanvasList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  canvas {
    display: block;
    width: 100%;
    max-width: 820px;
    height: auto;
    border-radius: 4px;
    background: #fff;
    box-shadow: 0 3px 14px rgba(0, 0, 0, 0.45);
  }
`;

export const PdfMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 40px 20px;
  text-align: center;
  color: rgba(255, 255, 255, 0.7);
  font-size: 15px;
`;

export const PdfMessageLink = styled.a`
  display: inline-flex;
  align-items: center;
  padding: 9px 18px;
  border-radius: 10px;
  background: ${({ theme }) => theme.color.basic.primary};
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;

  &:hover {
    background: ${({ theme }) => theme.color.basic.hover};
  }
`;
