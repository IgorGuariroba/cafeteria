import styled from 'styled-components'

export const LayoutContainer = styled.div`

  height: '104px';
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 160px;
  gap: 820px;
  background: ${(props) => props.theme['white']};
`