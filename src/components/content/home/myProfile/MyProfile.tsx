import React from 'react';
import styles from './MyProfile.module.css';

type MyProfilePropsType = {
    myProfile: {
        src: string
        alt: string
        name: string,
        hobbies: Array<string>
    }
}

const MyProfile = (props: MyProfilePropsType) => {

    return <div className={styles.myProfile}>
        <img className={styles.avatar}  src={props.myProfile.src} alt={props.myProfile.alt}/>
        <div className={styles.description}>
            <p>{`Name: ${props.myProfile.name} `}</p>
            <p>{`Hobbies: ${props.myProfile.hobbies}`}</p>
        </div>
    </div>
}

export default MyProfile;