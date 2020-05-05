import styled from 'styled-components';

export const Grid = styled.div`
  @media (min-width: 1216px) {
    display: grid;
    grid-template-columns: 1fr repeat(2, minmax(auto, 38em)) 1fr;
  }
`;

export const GridColumn = styled.div`
  display: flex;

  @media (min-width: 1216px) {
    grid-column: 2/4;
  }
`;
