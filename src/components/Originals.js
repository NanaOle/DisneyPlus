import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

function Originals({ data1b }) {
  return (
    <Container>
      <h4>Originals</h4>
      <Content className="rec">
        {data1b &&
          data1b.map((data1b, key) => (
            <Wrap key={key}>
              {data1b.id}
              <Link to={`/detail/` + data1b.id}>
                <img src={data1b.cardImg} alt={data1b.title} />
              </Link>
            </Wrap>
          ))}
      </Content>
    </Container>
  )
}

const Container = styled.div`
  padding: 0 0 26px;
`

const Content = styled.div``

const Wrap = styled.div`
  padding-top: 58.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgb(249, 249, 249, 0.1);

  img {
    inset: 0px;
    display: block;
    position: absolute;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    transition: opacity 500ms ease-in-out 0s;
    z-index: 1;
    top: 0;
    width: 100%;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgb(249, 249, 249, 0.8);
  }
`

export default Originals
