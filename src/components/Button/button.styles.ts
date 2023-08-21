import { styled } from "styled-components";
import type { IButtonProps } from "../../types";

export const ButtonWrapper = styled.div<IButtonProps>`
  background: ${({ bg }) => bg};
  color: ${({ font }) => font};
  border: ${({ border }) => "1px solid " + border};
  border-radius: 9999px;
  display: flex;
  align-items: center;
  ${({ size }) => {
    switch (size) {
      case "sm":
        return `font-size: 14px; padding: 12px 24px;`;
      case "md":
        return `font-size: 16px; padding: 16px 32px;`;
      case "lg":
        return `font-size: 18px; padding: 18px 36px;`;
      default:
        return `font-size: 16px; padding: 16px 32px;`;
    }
  }};
  font-weight: 600;
  & > :not(:first-child) {
    margin-left: 10px;
  }
`;