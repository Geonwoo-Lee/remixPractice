import React, { FunctionComponent } from "react";
import { remixta } from "../../interface";
import { ContentImg, ContentText, ContentTitleNameText, ContentCard } from "../../styles";



const ContentCardComponent = ( props: {remixta: remixta}) => {
    return (
            <ContentCard>
                <ContentImg src={props.remixta.img} />
                <ContentText>
                    <ContentTitleNameText>{props.remixta.name}</ContentTitleNameText>
                    {props.remixta.title}
                    {props.remixta.body}
                </ContentText>
            </ContentCard>
    );
};

export default ContentCardComponent;
