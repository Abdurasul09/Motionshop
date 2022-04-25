import React from 'react';
import {ArrowLeft, ArrowRight} from "./Icons";
import { useState } from "react";
import styled from "styled-components";
// import { mobile } from "../responsive";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #b794f4;;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 90vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const Image = styled.img`
  height: 80%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
`;

const Desc = styled.p`
  margin: 40px 0;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;




const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 1);
        } else {
            setSlideIndex(slideIndex < 1 ? slideIndex + 1 : 0);
        }
    };

    return (
        <Container>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <ArrowLeft/>
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {data.map((item) => (
                    <Slide bg={item.bg} key={item.id}>
                        <ImgContainer>
                            <Image src={item.img} />
                        </ImgContainer>
                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Desc>{item.desc}</Desc>
                            <button
                                type="button"
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                            >
                                SHOW NOW
                            </button>

                        </InfoContainer>
                    </Slide>
                ))}
            </Wrapper>
            <Arrow direction="right" onClick={() => handleClick("right")}>
                <ArrowRight/>
            </Arrow>
        </Container>
    );
};

export default Slider;


const data = [
    {
        id:1,
        img: 'https://vantageapparel.com/Images/ProductImages/Low/GILD6400_Heather_Navy_silo_logo.png',
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium atque aut debitis doloribus harum in iusto minima, quod repudiandae!",
        title: "Lorem ipsum dolor sit amet"
    },
    {
        id:2,
        img: 'https://sc04.alicdn.com/kf/H3f97a935b175436d81aedeef56811ec5u.jpg',
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium atque aut debitis doloribus harum in iusto minima, quod repudiandae!",
        title: "Lorem ipsum dolor sit amet"
    }
]