import styled from '@emotion/styled';
import { FYSTOCK_GRAY } from '../../domain/constants';

export const FinancialStatementsBlock = styled.table`
  &&& {
    table,
    th,
    td {
      border: 1px solid ${FYSTOCK_GRAY};
      border-collapse: collapse;
    }
    th,
    td,
    tr {
      width: 20%;
      padding: 5px;
    }
    th {
      text-align: left;
    }
    table {
      width: 100%;
      min-width: 40rem;
    }
  }
`;
