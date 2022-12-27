import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import React, { useEffect } from "react";
import { getRemixtaPost, getUserInfo } from "~/lib/api/api";
import { remixta, userInfo } from "~/lib/interface";
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
} from "~/lib/styles";

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
            <RemixtaHeaderWrap>
                <RemixtaHeaderContentWrap>
                    <RemixHeaderProfileImage src={userInfomation.userimage} />
                    <RemixtaHeaderNameWrap>
                        {userInfomation.username}
                    </RemixtaHeaderNameWrap>
                </RemixtaHeaderContentWrap>
                <RemixHeaderUserInfoWrap>
                    <RemixHeaderUserInfoContent>
                        <div>
                            게시글
                        </div>
                        <div>
                            {userInfomation.post}
                        </div>
                    </RemixHeaderUserInfoContent>
                    <RemixHeaderUserInfoContent>
                        <div>
                            팔로워
                        </div>
                        <div>
                            {userInfomation.fallower}
                        </div>
                    </RemixHeaderUserInfoContent>
                    <RemixHeaderUserInfoContent>
                        <div>
                            게시글
                        </div>
                        <div>
                            {userInfomation.fallowing}
                        </div>
                    </RemixHeaderUserInfoContent>
                </RemixHeaderUserInfoWrap>
            </RemixtaHeaderWrap>
            <ContentWrap>
                {data.remixta.map((el: remixta) => (
                    <ContentCard>
                        <ContentImg src={el.img} />
                        <ContentText>
                            <ContentTitleNameText>
                                {el.name}
                            </ContentTitleNameText>
                            {el.title}
                            {el.body}
                        </ContentText>
                    </ContentCard>
                ))}
            </ContentWrap>
        </div>
    );
};

export default remiixtamain;
