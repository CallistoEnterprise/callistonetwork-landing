import Row, { RowCenter, RowEnd } from 'components/Row';
import Spacer from 'components/Spacer';
import Title from 'components/Title';
import { Assets } from 'constants/images';
import React from 'react'
import { Theme } from 'constants/theme';
import useMetrics from 'hooks/useMetrics';
import styled from 'styled-components';
import Slick, { Settings } from "react-slick";
import { securitydata } from 'constants/strings';
import NextArrow from './NextArrow';
import PrevArrow from './PrevArrow';

import "./style.scss";

const comma3digits = (d) => {
    return d.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
}

const slickSettings: Settings = {
    accessibility: false,
    draggable: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    speed: 500,
    dots: true,
    dotsClass: "slick-dots",
    autoplay: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
};

const Services = () => {
    const mestricsData = useMetrics();
    const frozen = mestricsData.frozen_coins.toFixed(3).toString().split('.');
    const cvfrozen1 = comma3digits(parseInt(frozen[0]));
    const cvfrozen2 = frozen.length === 1 ? '': frozen[1];

    const renderItems = () => {
        return securitydata.map((item) =>{
            return (
                <BottomCon key={item.id}>
                    <a href={item.link} target="_blank" rel="noreferrer">
                        <FixedImg src={item.img} alt="image"/>
                    </a>
                    <SubCon>
                        <LineImg className="line-image" src={Assets.line} alt="line_image"/>
                        <LineMarkImg src={Assets.linemark} alt="mark_image"/>
                        <SpaceRow2>
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <DisableDiv/>
                                </div>
                                
                                <div className="col-lg-6 col-md-6">
                                    <QuadDiv>
                                        <div/>
                                        <TitleSubCon>
                                            <SubTitle>{item.title1}</SubTitle>
                                            <SubTitle>{item.title2}</SubTitle>
                                        </TitleSubCon>
                                        <LineDiv/>
                                    </QuadDiv>
                                </div>
                            </div>
                        </SpaceRow2>
                        <Spacer height="50px"/>
                        <SpaceRow>
                            <div className="row">
                                {
                                    item.desc.map((descItem, index) => (
                                        <div className="col-lg-6 col-sm-12" key={descItem.id}>
                                            <QuadDiv>
                                                <div/>
                                                <RowItem>
                                                    <NumberCon>{`0${index+1}`}</NumberCon>
                                                    <TextCon>
                                                        <SubTitle3>{descItem.title}</SubTitle3>
                                                        <Spacer height="10px" />
                                                        <Text>
                                                            {descItem.contents}
                                                        </Text>
                                                    </TextCon>
                                                </RowItem>
                                                <div/>
                                            </QuadDiv>
                                        </div>
                                    ))
                                }
                            </div>
                        </SpaceRow>
                    </SubCon>
                </BottomCon>
            )
        })
        
    }
    return (
        <Container>
            <TitleCon>
                <Title text="Callisto Network Metrics"/>
            </TitleCon>
            <MetricsCon>
                <div className="row">
                    {/* <div className="col-lg-3 col-md-6 col-sm-6">
                        <Row pl="0px" pr="0px">
                            <Img src={Assets.totalWallet} />
                            <RightCon>
                                <Label>Total Wallets</Label>
                                <NumberLabel>{comma3digits(mestricsData.total_wallets)}</NumberLabel>
                            </RightCon>
                        </Row>
                    </div> */}
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <RowEnd pl="0px" pr="50px">
                            <Img src={Assets.monthT} />
                            <RightCon>
                                <Label>Monthly Transactions</Label>
                                <NumberLabel>{`${comma3digits(mestricsData.monthly_transactions)} txs`}</NumberLabel>
                            </RightCon>
                        </RowEnd>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <RowCenter>
                            <Img src={Assets.frozen} />
                            <RightCon>
                                <Label>Frozen Coins</Label>
                                <NumberLabel>{cvfrozen1}.{cvfrozen2} CLO</NumberLabel>
                            </RightCon>
                        </RowCenter>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <Row pl="30px" pr="0px">
                            <Img src={Assets.hashrate} />
                            <RightCon>
                                <Label>Network Hashrate</Label>
                                <NumberLabel>{`${mestricsData.netwok_hashrate}`}</NumberLabel>
                            </RightCon>
                        </Row>
                    </div>
                </div>
            </MetricsCon>
            <Spacer height="50px" />
            <CardDiv className="security-container">
                <Slick {...slickSettings}>{renderItems()}</Slick>
            </CardDiv>
            
            <Spacer height="100px" />
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    margin: 0;
    @media screen and (max-width: 768px) {
        padding: 0px 5px;
    }
`;
const TitleSubCon = styled.div`
    // margin-top: -100px;
`
const CardDiv = styled.div`
    // padding: 20px 0px;
    // @media (max-width: 768px) {
    //     padding: 20px;
    // }
`;
const TitleCon = styled.div`
    width: 100%;
    padding: 0 10%;
    @media screen and (max-width: 768px) {
        padding: 0 20px;
    }
`;
const MetricsCon = styled.div`
    padding: 50px 10%;
    @media screen and (max-width: 768px) {
        padding: 30px 20px;
    }
`;
const RightCon = styled.div`
    margin-left: 20px;
`;
const Img = styled.img`
    @media screen and (max-width: 1200px) {
        width: 50px;
    }
`;
const SpaceRow2 = styled.div`
    width: 100%;
    height: 100%;
    padding: 0px;
    justify-content: space-between;
    @media screen and (max-width: 768px) {
        margin-top: 100px;
    }
    @media screen and (max-width: 590px) {
        margin-top: 30px;
    }
    @media screen and (max-width: 420px) {
        margin-top: 0px;
    }
`
const SpaceRow = styled.div`
    width: 100%;
    height: 100%;
    padding: 0px;
    justify-content: space-between;
`
const FixedImg = styled.img`
    position: absolute;
    left: 10%;
    width: calc(40% - 40px);
    max-width: 592px;
    // height: 350px;
    z-index: 1;
    background-color: transparent !important;
    padding: 0 !important;
    border-radius: 30px;
    @media screen and (max-width: 1300px) {
        // height: 250px;
    }
    @media screen and (max-width: 1100px) {
        // height: 200px;
    }
    @media screen and (max-width: 768px) {
        // left: 20px;
        margin-left: auto;
        margin-right: auto;
        width: calc(100% - 120px);
    }
    @media screen and (max-width: 590px) {
        width: calc(100% - 90px);
    }
    @media screen and (max-width: 420px) {
        width: calc(100% - 50px);
    }
`;
const Label = styled.p`
    color: ${Theme.colors.secondary};
    font-size: 18px;
    font-family: ${Theme.fonts.text};
    line-height: 24px;
    @media screen and (max-width: 1200px) {
        font-size: 16px;
    }
    @media screen and (max-width: 900px) {
        font-size: 14px;
    }
`;
const NumberLabel = styled.p`
    color: ${Theme.colors.secondary};
    font-size: 24px;
    font-family: ${Theme.fonts.textBold};
    line-height: 30px;
    @media screen and (max-width: 1200px) {
        font-size: 18px;
    }
    @media screen and (max-width: 900px) {
        font-size: 14px;
    }
`;
const BottomCon = styled.div`
    position: relative;
`;
const SubCon = styled.div`
    position: relative;
    margin-top: 65px;
    // height: 500px;
    background-color: ${Theme.colors.secondary};
    border-top: 8px;
    border-bottom: 8px;
    border-style: solid;
    border-color: #1E587D;
    padding: 65px 10%;
    @media screen and (max-width: 768px) {
        padding: 0 20px 30px 20px;
    }
    @media screen and (max-width: 420px) {
        margin-top: 50px;
    }
`;
const LineImg = styled.img`
    position: absolute;
    left: 2.5%;
    bottom: 50px;
    z-index: 1;
    background-color: transparent !important;
    padding: 0 !important
    @media screen and (max-width: 998px) {
        display: none !important;
    }
`;
const LineMarkImg = styled.img`
    position: absolute;
    right: 10px;
    bottom: 0px;
    height: 430px;
    z-index: 1;
    background-color: transparent !important;
    padding: 0 !important
    @media screen and (max-width: 1180px){
        height: 250px;
    }
    @media screen and (max-width: 1112px){
        height: 150px;
    }
    @media screen and (max-width: 998px) {
        display: none !important;
    }
`;
const QuadDiv = styled.div`
    height: 192px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    // background-color: red;
    margin-top: -20px;
`;

const SubTitle = styled.p`
    font-family: ${Theme.fonts.textBold};
    font-size: 60px;
    color: ${Theme.colors.white};
    text-align: left;
    line-height: 1.08;
    letter-spacing: 1.2px;
    @media screen and (max-width: 768px) {
        font-size: 40px;
    }
`;

const LineDiv = styled.div`
    height: 2px;
    width: 60%;
    border-radius: 4px;
    background-color: ${Theme.colors.white};
`;

const RowItem = styled.div`
    display: flex;
    align-items: center;
    width: 90%;
    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;
const NumberCon = styled.div`
    display: flex;
    width: 50px;
    height: 50px;
    background-color: ${Theme.colors.white};
    border-radius: 20px;
    justify-content: center;
    align-items: center;
    font-family: ${Theme.fonts.textBold};
    font-size: 18px;
    color: ${Theme.colors.secondary};
    z-index: 99;
    // box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.2), 0 5px 10px 0 rgba(0, 0, 0, 0.2);
`;
const TextCon = styled.div`
    width: 80%;
    margin-left: 15px;
`;
const SubTitle3 = styled.p`
    font-family: ${Theme.fonts.textBold};
    font-size: 20px;
    color: ${Theme.colors.white};
    text-align: left;
`;
const Text = styled.p`
    font-family: ${Theme.fonts.text};
    font-size: 16px;
    line-height: 20px;
    color: ${Theme.colors.white};
    text-align: left;
`;
const DisableDiv = styled.div`
    @media screen and (max-width: 768px) {
        height: 120px;
    }
    @media screen and (max-width: 700px) {
        height: 100px;
    }
`;

export default Services;
