import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Story, Meta} from '@storybook/react/types-6-0';
import {action} from "@storybook/addon-actions";

import {Post} from './Post'

export default {
    title: 'Example/Post',
    component: Post,
};

export const RegularPost = () => <Post id={"1"} avatar={"https://i.pinimg.com/originals/67/48/70/674870a1014ba8fab563f24a9646d0df.jpg"} alt={"this is a picture"} message={"text of the post"} likecount={1} />


