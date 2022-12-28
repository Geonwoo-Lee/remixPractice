import styled from "styled-components"

export const ContentWrap = styled.div`
    width: 100%;
    height: 100%;
    max-width: 1200px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 50px;
    margin: 0 auto;
    margin-top: 100px;
`



//카드

export const ContentCard = styled.div`
    width: 300px;
    height: 400px;
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;;
    cursor: pointer;
`

export const ContentImg = styled.img<{src: string}> `
    width: 300px;
    height: 300px;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    src: ${props => props.src};
`

export const ContentText = styled.div `
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-left: 10px;
    padding-right: 10px;
`

export const ContentTitleNameText = styled.div `
    font-weight: bold;
    margin-top: 10px;
`



//헤더
export const RemixtaHeaderWrap = styled.div `
    width: 100%;
    max-width: 1200px;
    height: 300px;
    display: flex;
    flex-direction: row;
    margin: 0 auto;
    border-bottom: 2px solid #d6d6d6;

`

export const RemixtaHeaderContentWrap = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 400px;
    gap: 30px;
`

export const RemixtaHeaderImgWrap = styled.div`
    width: 100%;
    max-width: 400px;
    min-width: 400px;
    height: 500px;
`

export const RemixtaHeaderNameWrap = styled.div`
text-align: center;
font-weight: bold;
font-size: 30px;
`

export const RemixHeaderUserInfoWrap = styled.div`
    width: 100%;
    max-width: 800px;
    display: flex;
`

export const RemixHeaderUserInfoContent = styled.div`
    width: 100%;
    max-width: 266px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    font-size: 20px;
    font-weight: bold;
    margin-top: 100px;
    text-align: center;
`

export const RemixHeaderProfileImage = styled.img<{src: string}>`
    src: ${props => props.src};
    width: 200px;
    height: 200px;
    border-radius: 100%;
    margin: 0 auto;
`

