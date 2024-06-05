import styled from 'styled-components'

export const Bg = styled.div`
    min-height: 100vh;
    padding: 30px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    
        `

export const BgCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width:65%;
    
        `

export const Head = styled.h1`
    color: #1e293b;
    font-size: 25px;
    font-weight: bold;
    font-family: Roboto;
    margin: 0px;
    text-align: center;
    margin-top: 30px;
    margin-bottom: 10px;
    
    @media (min-width:768px) {
        font-size: 40px;
    }
    
        `

export const Para = styled.p`
    color: #334155;
    font-size: 15px;
    margin: 0px;
    margin-bottom: 15px;
    text-align: center;
    @media (min-width:768px) {
        font-size: 20px;
    }
    

        `

export const ReactImg = styled.img`
    height: 170px;
    width: 200px;
    margin: 0px;
    border-radius: 5px;
    margin-bottom: 15px;
    @media (min-width:768px) {
        height: 300px;
        width:450px;
    }
    @media (min-width:992px) {
        height: 500px;
        width:100%;
    }
    
        `

export const Description = styled.p`
    color: #334155;
    font-size: 15px;
    margin: 0px;
    text-align: left;
    line-height: 23px;
    @media (min-width:768px) {
        font-size: 20px;
        line-height: 25px;
    }
    
        `

export const ReadBtn = styled.button`
    color: white;
    background-color: #1f81ff;
    border-radius: 5px;
    height: 35px;
    width: 100px;
    cursor: pointer;
    outline: none;
    border: 0px;
    margin-top: 20px;
    align-self: flex-start;
    @media (min-width:768px) {
        height: 50px;
        width: 130px;
        font-size: 17px;
        font-weight: bold;
        align-self: center;
    }

`
