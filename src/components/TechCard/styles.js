import { Paper } from "@material-ui/core";
import styled from "styled-components";

export const PaperCustom = styled(Paper)`
  padding: 10px;
  margin-bottom: 10px;
  width: 100%;
  max-width: 600px;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .title {
    font-size: 0.9rem;
    color: var(--primary-dark);
  }

  .status {
    font-size: 0.9rem;
    color: var(--gray-dark);
  }

  @media (min-width: 768px) {
    .title {
      font-size: 1.2rem;
    }

    .status {
      font-size: 1.2rem;
    }
  }
`;
