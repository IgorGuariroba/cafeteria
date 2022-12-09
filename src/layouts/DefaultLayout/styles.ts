import styled from 'styled-components'

export const LayoutContainer = styled.div`

  height: '104px';
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 32px 160px;
  gap: 820px;
  background: ${(props) => props.theme['white']};
`

export const Actions = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0px;
  gap: 12px;

  width: 193px;
  height: 38px;


  flex: none;
  order: 1;
  flex-grow: 0;

  div {
    display: flex;
    align-items: center;
    justify-content: space-around;
    text-align: center;
    color: #4B2995;
    background: #EBE5F9;
    border-radius: 8px;
    padding: 4px;
    font-family: Roboto;
    font-size: 0.9rem;

    img {
      height: 2rem
    }
  }

  span {
    background: #F1E9C9;
    color: #C47F17;
    border-radius: 8px;
    padding: 8px;
  }

`

