import styled from "styled-components";

interface NavProps {
  show: boolean;
}

const StyledNav = styled.nav<NavProps>`
  height: 10vw;
  position: relative;
  z-index: 20;
  .nav {
    height: 7.2vw;
    background-color: ${(props) => props.theme.colors.dark};
    .links {
      transition: 300ms ease-in-out;
      padding-top: 10px;
      height: ${(props) => (props.show ? "30vw" : "0vw")};
      overflow: hidden;
      position: absolute;
      z-index: 5;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: ${(props) => props.theme.colors.dark};
      a {
        font-size: 5vw;
        font-family: "Odibee Sans", cursive;
        color: white;
        &:hover {
          color: #af7627;
        }
      }
    }
  }

  .burger {
    height: 30px;
    width: 40px;
    z-index: 6;
    position: absolute;
    top: 0;
    right: 15px;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    div {
      transition: ease-in-out 300ms;
      border-radius: 5px;
      width: 40px;
      height: 5px;
      background-color: white;
    }
    > :nth-child(1) {
      position: absolute;
      bottom: ${(props) => (props.show ? "10px" : "0px")};
      transform: ${(props) => (props.show ? "rotate(50deg)" : "rotate(0deg)")};
    }
    > :nth-child(2) {
      position: absolute;
      bottom: 10px;
      right: 0px;
      opacity: ${(props) => (props.show ? "0" : "1")};
    }
    > :nth-child(3) {
      position: absolute;
      bottom: ${(props) => (props.show ? "10px" : "20px")};
      transform: ${(props) => (props.show ? "rotate(-50deg)" : "rotate(0deg)")};
    }
  }
  @media all and (min-width: ${(props) => props.theme.breakpoints.m}) {
    height: 7vw;
    .nav {
      height: 4vw;
      display: flex;
      align-items: center;
      .links {
        transition: 300ms ease-in-out;
        height: 100%;
        position: relative;
        z-index: 5;
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;
        background-color: transparent;
        a {
          margin-right: 20px;
          font-size: 2vw;
        }
      }
    }
    .burger {
      display: none;
    }
  }
`;

export { StyledNav };
