import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import React, { useEffect } from "react";
import { getRemixtaPost, getUserInfo } from "lib/remixtaMain/shell-web/api/api";
import { remixta, userInfo } from "lib/remixtaMain/shell-web/interface";
import {
    ContentCard,
    ContentImg,
    ContentText,
    ContentTitleNameText,
    ContentWrap,
    RemixHeaderProfileImage,
    RemixHeaderUserInfoContent,
    RemixHeaderUserInfoWrap,
    RemixtaHeaderContentWrap,
    RemixtaHeaderNameWrap,
    RemixtaHeaderWrap,
} from "lib/remixtaMain/shell-web/styles";
import ContentCardComponent from "lib/remixtaMain/shell-web/component/contentCard";
import ContentHeaderComponent from "lib/remixtaMain/shell-web/component/contentHeader";

export const loader = async () => {
    const userInfo = await getUserInfo();
    const remixta = await getRemixtaPost();

    const data = {
        userInfo: userInfo,
        remixta: remixta,
    };
    return json(data);
};

const remiixtamain = () => {
    const data = useLoaderData();
    const userInfomation: userInfo = data.userInfo;

    return (
        <div>
            <ContentHeaderComponent userInfo={userInfomation}/>
            <ContentWrap>
                {data.remixta.map((el: remixta) => (
                     <ContentCardComponent remixta={el}/>
                ))}
            </ContentWrap>
        </div>
    );
};

export default remiixtamain;
